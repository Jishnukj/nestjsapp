import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NumService } from './num.service';
import { CreateNumDto } from './dto/create-num.dto';
import { UpdateNumDto } from './dto/update-num.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('num')
@Controller('num')
export class NumController {
  constructor(private readonly numService: NumService) {}

  @Post()
  create(@Body() createNumDto: CreateNumDto) {
    return this.numService.create(createNumDto);
  }

  @Get()
  findAll() {
    return this.numService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.numService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNumDto: UpdateNumDto) {
    return this.numService.update(+id, updateNumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.numService.remove(+id);
  }
}
