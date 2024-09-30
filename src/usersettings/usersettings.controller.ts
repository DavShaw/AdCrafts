import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersettingsService } from './usersettings.service';
import { CreateUsersettingDto } from './dto/create-usersetting.dto';
import { UpdateUsersettingDto } from './dto/update-usersetting.dto';

@Controller('usersettings')
export class UsersettingsController {
  constructor(private readonly usersettingsService: UsersettingsService) {}

  @Post()
  create(@Body() createUsersettingDto: CreateUsersettingDto) {
    return this.usersettingsService.create(createUsersettingDto);
  }

  @Get()
  findAll() {
    return this.usersettingsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersettingsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsersettingDto: UpdateUsersettingDto) {
    return this.usersettingsService.update(+id, updateUsersettingDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersettingsService.remove(+id);
  }
}
