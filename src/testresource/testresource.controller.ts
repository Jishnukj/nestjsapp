import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TestresourceService } from './testresource.service';
import { CreateTestresourceDto } from './dto/create-testresource.dto';
import { UpdateTestresourceDto } from './dto/update-testresource.dto';

@Controller('testresource')
export class TestresourceController {
  constructor(private readonly testresourceService: TestresourceService) {}

  @Post()
  create(@Body() createTestresourceDto: CreateTestresourceDto) {
    return this.testresourceService.create(createTestresourceDto);
  }

  @Get()
  findAll() {
    return this.testresourceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testresourceService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTestresourceDto: UpdateTestresourceDto) {
    return this.testresourceService.update(+id, updateTestresourceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testresourceService.remove(+id);
  }
}
