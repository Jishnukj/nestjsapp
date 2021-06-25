import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SublocService } from './subloc.service';
import { CreateSublocDto } from './dto/create-subloc.dto';
import { UpdateSublocDto } from './dto/update-subloc.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Sublocation')
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

  @Patch()
  update(@Body() updateSublocDto: UpdateSublocDto) {
    return this.sublocService.update(updateSublocDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sublocService.remove(+id);
  }
}
9