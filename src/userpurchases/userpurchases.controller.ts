import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserpurchasesService } from './userpurchases.service';
import { CreateUserpurchaseDto } from './dto/create-userpurchase.dto';
import { UpdateUserpurchaseDto } from './dto/update-userpurchase.dto';

@Controller('userpurchases')
export class UserpurchasesController {
  constructor(private readonly userpurchasesService: UserpurchasesService) {}

  @Post()
  create(@Body() createUserpurchaseDto: CreateUserpurchaseDto) {
    return this.userpurchasesService.create(createUserpurchaseDto);
  }

  @Get()
  findAll() {
    return this.userpurchasesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userpurchasesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserpurchaseDto: UpdateUserpurchaseDto) {
    return this.userpurchasesService.update(+id, updateUserpurchaseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userpurchasesService.remove(+id);
  }
}
