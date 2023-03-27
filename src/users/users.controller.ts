import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }
    @Get()
    getAllUser() {
        return this.usersService.getAllUser();
    }

    @Get(":id")
    getUserById(@Param("id") id: string) {
        return this.usersService.getUserById(Number(id));
    }

    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.usersService.createUser(createUserDto);
    }
}
