import { Injectable } from '@nestjs/common';
import { CreateUsersettingDto } from './dto/create-usersetting.dto';
import { UpdateUsersettingDto } from './dto/update-usersetting.dto';

@Injectable()
export class UsersettingsService {
  create(createUsersettingDto: CreateUsersettingDto) {
    return 'This action adds a new usersetting';
  }

  findAll() {
    return `This action returns all usersettings`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usersetting`;
  }

  update(id: number, updateUsersettingDto: UpdateUsersettingDto) {
    return `This action updates a #${id} usersetting`;
  }

  remove(id: number) {
    return `This action removes a #${id} usersetting`;
  }
}
