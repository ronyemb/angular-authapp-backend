import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './entities/user.entity';
import * as bcryptjs from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from './interfaces/jwt.payload';
import { LoginResponse } from './interfaces/login-response';

import { RegisterUserDto, LoginDto, UpdateAuthDto, CreateUserDto } from './dto';

@Injectable()
export class AuthService {

  constructor(
    @InjectModel( User.name ) 
    private userModel: Model<User>,
    private jwtService: JwtService
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User> {
    
    try {
      
      //1 - Encriptar la contraseña
      const { password, ...userData } = createUserDto;
      const newUser = new this.userModel({
        password: bcryptjs.hashSync(password, 10),
        ...userData        
      });

      //2 - Guardar el usuario
      await newUser.save();

      //3 - Retornar el usuario sin el password
      const { password:_, ...user } = newUser.toJSON();
      return {
        password:_, ...user
      }

    } catch (error) {
      if(error.code === 11000) {
        throw new BadRequestException(`El correo ${createUserDto.email} ya existe`);
      }
      throw new Error('Error al crear el usuario');      
    }
  }

  async register(registerDto: RegisterUserDto): Promise<LoginResponse>{

    const user: User = await this.create(registerDto);

    return {
      user,
      token: await this.getJwtToken({ id: user._id })
    }
  }
  
  async login(loginDto: LoginDto): Promise<LoginResponse>{

    const { email, password } = loginDto;
    const user = await this.userModel.findOne({ email });
    if(!user) {
      throw new UnauthorizedException('Usuario no encontrado');
    }
    if(!bcryptjs.compareSync(password, user.password)) {
      throw new UnauthorizedException('Contraseña incorrecta');
    }
    const { password:_, ...rest } = user.toJSON();

    const token = await this.getJwtToken({
      id: user._id
    })

    return {
      user: rest,
      token: token

    };
  }

  findAll(): Promise<User[]> {    
    return this.userModel.find();
  }

  async findUserById(id: string): Promise<User> {
    const user = await this.userModel.findById(id);
    const { password, ...rest } = user.toJSON();
    return rest;
  }

  findOne(id: number): Promise<User> {
    return this.userModel.findById(id);
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }

  async getJwtToken( payload: JwtPayload ): Promise<string> {
    const token: string = await this.jwtService.signAsync(payload);
    return token;
  }
}
