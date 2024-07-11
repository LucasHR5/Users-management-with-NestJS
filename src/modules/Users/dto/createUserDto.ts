import { IsEmail, IsNotEmpty, IsString, IsStrongPassword } from "class-validator";
import { UserEntity } from "../entities/user.entity";
import { OmitType } from "@nestjs/mapped-types";

export class CreateUserDto extends OmitType(UserEntity, ['id', 'createdAt', 'updatedAt']){}