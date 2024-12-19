import { IsEmail, IsString, Min, MinLength } from "class-validator";

export class RegisterUserDto {

    @IsEmail()
    email: string;
    @IsString()
    name: string;
    @MinLength(6)
    password: string;

}
