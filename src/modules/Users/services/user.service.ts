import { ConflictException, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from '../dto/createUserDto';
import { UpdatedUserDto } from '../dto/updatedUserDto';
import { UserRepository } from '../repositories/userRepository';
import { User } from '@prisma/client';


@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) {}

    async createUser(createUserDto: CreateUserDto): Promise<User> {
        const user = await this.userRepository.findByEmail(createUserDto.email);
        if (user) {
            throw new ConflictException('Email duplicated');
        }
        return this.userRepository.create(createUserDto);
    }

   async findAll(): Promise <User[]> {
        const users = await this.userRepository.findAll();
        if(!users){
            throw new HttpException('No users founded!', HttpStatus.NOT_FOUND)
        }
        return users;
    }

    async findById(id: number): Promise <User> {
        const user = await this.userRepository.findById(id);
        if(!user){
            throw new NotFoundException('User not founded!');
        }
        return user;
    }

    async updateUser (id: number, updateUserDto: UpdatedUserDto): Promise<User> {
        const userUpdated = await this.userRepository.findById(id);
        if(!userUpdated){
            throw new NotFoundException('User not founded!');
        }
        return this.userRepository.updateUser(id, updateUserDto);
    }

    async deleteUser(id: number): Promise<User> {
        const user = await this.userRepository.findById(id);
        if(!user){
            throw new ConflictException('Error when deleting user: Unit does not exist!');
        }

       return this.userRepository.deleteUser(id);
    }
}

