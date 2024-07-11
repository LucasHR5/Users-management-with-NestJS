import { User } from "@prisma/client";
import { CreateUserDto } from "../dto/createUserDto";
import { UpdatedUserDto } from "../dto/updatedUserDto";
import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class UserRepository {

    constructor(private prisma: PrismaService){}

    async create(data: CreateUserDto): Promise<User> {
        const newUser = await this.prisma.user.create({
            data
        });
        return newUser;
    }

    async findByEmail(email: string): Promise<User> {
        return await this.prisma.user.findUnique({ where: { email }});
    }

    async findAll(): Promise<User[]> {
        return await this.prisma.user.findMany();
    }

    async findById(id: number): Promise<User | null> {
        return await this.prisma.user.findUnique({ where: { id } });
    }

    async updateUser(id: number, data: UpdatedUserDto): Promise<User> {
        const user = await this.prisma.user.update({
            where: { id },
            data
        });
        return user;
    }

    async deleteUser(id: number): Promise<User> {
        return await this.prisma.user.delete({ where: { id } })
    }
}
