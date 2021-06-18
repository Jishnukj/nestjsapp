import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SublocService } from './subloc.service';
import { CreateSublocDto } from './dto/create-subloc.dto';
import { UpdateSublocDto } from './dto/update-subloc.dto';

@Controller('subloc')
export class SublocController {
  constructor(private readonly sublocService: SublocService) {}

  @Post()
  create(@Body() createSublocDto: CreateSublocDto) {
    return this.sublocService.create(createSublocDto);
  }

  @Get()
  findAll() {
    return this.sublocService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sublocService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSublocDto: UpdateSublocDto) {
    return this.sublocService.update(+id, updateSublocDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sublocService.remove(+id);
  }
}