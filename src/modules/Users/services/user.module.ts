import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from '../controllers/user.controller';
import { UserRepository } from '../repositories/userRepository';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [UserService, UserRepository, PrismaService],
  controllers: [UserController]
})
export class UserModule {}
