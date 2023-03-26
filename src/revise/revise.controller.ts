import { Body, Controller, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';

@Controller('revise')
export class ReviseController {
    @Get()
    getNinjas(@Query("name") name: string, @Query("age") age: number) {
        return { name, age };
    }

    @Get(":id")
    getNinjaById(@Param("id") id: string) {
        return {
            id,
        }
    }

    @Post()
    createNinja(@Body() createNinjaDto: CreateNinjaDto) {
        return {
            name: createNinjaDto.name,
        }
    }

    @Put()
    updateNinja(@Param("id") id: string, @Body() updateNinjaDto: UpdateNinjaDto) {
        return "update successful"
    }
}
