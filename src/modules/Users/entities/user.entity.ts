import { IsString, IsNotEmpty, IsEmail, isNotEmpty, isStrongPassword, IsStrongPassword } from "class-validator";

export class UserEntity implements Iuser {

    id: number;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsNotEmpty()
    @IsStrongPassword()
    password: string;

    @IsNotEmpty()
    status: string;
    
    @IsNotEmpty()
    userType: string;

    createdAt: Date;
    updatedAt: Date;
}