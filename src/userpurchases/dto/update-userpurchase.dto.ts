import { PartialType } from '@nestjs/mapped-types';
import { CreateUserpurchaseDto } from './create-userpurchase.dto';

export class UpdateUserpurchaseDto extends PartialType(CreateUserpurchaseDto) {}
