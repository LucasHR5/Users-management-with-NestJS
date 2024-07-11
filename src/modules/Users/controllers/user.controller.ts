import { Controller, Get, Post, Body, Param, Put, Delete, ParseIntPipe, HttpCode, HttpStatus } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { CreateUserDto } from '../dto/createUserDto';
import { UpdatedUserDto } from '../dto/updatedUserDto';
import { STATUS_CODES } from 'http';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    
    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
    
        return this.userService.createUser(createUserDto)
    }


    @Get()
    findAll(){
        return this.userService.findAll();
    }

    @Get(':id')
    findById(@Param('id', ParseIntPipe) id: number) {
        return this.userService.findById(id);

    }

    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body()updateUserDto: UpdatedUserDto) {
        return this.userService.updateUser(id, updateUserDto);
    }
    @Delete(':id')
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.userService.deleteUser(id);
    }
}