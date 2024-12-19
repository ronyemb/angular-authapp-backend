import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Observable } from 'rxjs';
import * as request from 'supertest';
import { JwtPayload } from '../interfaces/jwt.payload';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(
    private jwtService: JwtService,
    private AuthService: AuthService,
  ) {}

  async canActivate( context: ExecutionContext ): Promise<boolean> 
  {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);

    if (!token) {
      throw new UnauthorizedException('Token not found');
    }
    
    try {
      const payload = await this.jwtService.verifyAsync<JwtPayload>(token, { secret: process.env.JWT_SEED });

      const user = await this.AuthService.findUserById(payload.id);

      if (!user) { throw new UnauthorizedException('User not found'); }
      if (!user.isActive) { throw new UnauthorizedException('User not active'); }

      request['user'] = user;

    } catch (error) {
      throw new UnauthorizedException('Token not valid');
    }    

    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers['authorization']?.split(' ') ?? [];
    return type === 'Bearer' ? token : undefined;
  }

}
