import { Controller, Get, Param, Query, Post, Body } from '@nestjs/common';
import { Put } from '@nestjs/common/decorators';
import { CreateNinjaDto } from './dto/create-ninja.dto';
import { UpdateNinjaDto } from './dto/update-ninja.dto';
import { NinjasService } from './ninjas.service';

@Controller('ninjas')
export class NinjasController {

  constructor(private readonly ninjaService: NinjasService) { }

  @Get()
  getNinjas(@Query("type") type: string) {
    return this.ninjaService.getNinja();
  }

  @Get(":weapon")
  getNinjasId(@Param("weapon") weapon: string) {
    return this.ninjaService.getNinjaByWeapon(weapon);
  }

  @Post()
  createNinja(@Body() createNinjaDto: CreateNinjaDto) {
    return this.ninjaService.createNinja(createNinjaDto);
  }

  @Put(":id")
  updateNinja(@Param("id") id: number, @Body() updateNinjaDto: UpdateNinjaDto) {
    this.ninjaService.updateNinja(id, updateNinjaDto)
  }

}
