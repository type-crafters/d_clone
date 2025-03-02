import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class LoginDTO {
    @IsEmail()
    @IsNotEmpty()
    email!: string;

    @IsNotEmpty()
    @MinLength(8)
    password!: string;

    @IsNotEmpty()
    rememberMe!: boolean;
}