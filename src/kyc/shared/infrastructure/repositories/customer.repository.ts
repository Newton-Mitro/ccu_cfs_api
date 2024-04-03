import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { FindAllQueryRequest } from 'src/common/contract/find-all-query.dto';
import { CUSTOMER_MODEL, CustomerDocument } from '../schema/customer.schema';

@Injectable()
export class CustomerRepository {
  constructor(
    @InjectModel(CUSTOMER_MODEL)
    private readonly customerModel: Model<CustomerDocument>,
  ) {}

  async findAll(findAllQueryDto: FindAllQueryRequest): Promise<any[]> {
    const { order_by, limit, page, sort_by } = findAllQueryDto;

    const customers = await this.customerModel
      .find()

      .sort({ [sort_by]: order_by })
      .limit(limit)
      .skip(limit * (page - 1));

    return customers;
  }

  async findById(id: string): Promise<any> {
    const customer = await this.customerModel.findById(new Types.ObjectId(id));

    return customer;
  }
}
