import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Provider } from './entities/provider.entity';
import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';

@Injectable()
export class ProviderService {
  constructor(
    @InjectRepository(Provider)
    private providerRepository: Repository<Provider>,
  ) {}

  create(createProviderDto: CreateProviderDto): Promise<Provider> {
    const provider = this.providerRepository.create(createProviderDto);
    return this.providerRepository.save(provider);
  }

  findAll(): Promise<Provider[]> {
    return this.providerRepository.find();
  }

  findOne(id: number): Promise<Provider> {
    return this.providerRepository.findOne({ where: { id } });
  }

  async update(id: number, updateProviderDto: UpdateProviderDto): Promise<Provider> {
    await this.providerRepository.update(id, updateProviderDto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.providerRepository.delete(id);
  }
}
