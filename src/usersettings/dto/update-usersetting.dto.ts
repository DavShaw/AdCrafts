import { PartialType } from '@nestjs/mapped-types';
import { CreateUsersettingDto } from './create-usersetting.dto';

export class UpdateUsersettingDto extends PartialType(CreateUsersettingDto) {}
