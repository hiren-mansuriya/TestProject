import { Injectable } from '@nestjs/common';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SalesService {

  constructor(private prisma: PrismaService) {}

  create(createSaleDto: CreateSaleDto) {
    // return 'This action adds a new sale';

    console.log('=====-=-=-=-=-',createSaleDto);
    
    return this.prisma.sales.create({ data: createSaleDto })
  }

  findAll() {
    // return `This action returns all sales`;
    return this.prisma.sales.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} sale`;
  }

  update(id: number, updateSaleDto: UpdateSaleDto) {
    return `This action updates a #${id} sale`;
  }

  remove(id: number) {
    return `This action removes a #${id} sale`;
  }
}
