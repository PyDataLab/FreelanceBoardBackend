import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { KworkService } from './kwork.service';
import { CreateKworkDto } from './dto/create-kwork.dto';
import { UpdateKworkDto } from './dto/update-kwork.dto';

@Controller('kwork')
export class KworkController {
  constructor(private readonly kworkService: KworkService) {}

  @Post()
  create(@Body() createKworkDto: CreateKworkDto) {
    return this.kworkService.create(createKworkDto);
  }

  @Get()
  findAll() {
    return this.kworkService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kworkService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateKworkDto: UpdateKworkDto) {
    return this.kworkService.update(+id, updateKworkDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kworkService.remove(+id);
  }
  @Get('status/count')
  countByStatus() {
    return this.kworkService.countByStatus();
  }

}
