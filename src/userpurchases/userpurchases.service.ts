import { Injectable } from '@nestjs/common';
import { CreateUserpurchaseDto } from './dto/create-userpurchase.dto';
import { UpdateUserpurchaseDto } from './dto/update-userpurchase.dto';

@Injectable()
export class UserpurchasesService {
  create(createUserpurchaseDto: CreateUserpurchaseDto) {
    return 'This action adds a new userpurchase';
  }

  findAll() {
    return `This action returns all userpurchases`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userpurchase`;
  }

  update(id: number, updateUserpurchaseDto: UpdateUserpurchaseDto) {
    return `This action updates a #${id} userpurchase`;
  }

  remove(id: number) {
    return `This action removes a #${id} userpurchase`;
  }
}
