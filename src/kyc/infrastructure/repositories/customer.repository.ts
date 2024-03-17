import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { FindAllQueryDTO } from 'src/common/contract/find-all-query.dto';
import { EntityRepository } from 'src/config/database/mongoose/entity.repository';
import { CustomerModel } from 'src/kyc/domain/models/common/customer.model';
import { CustomerFactory } from '../factories/customer.factory';
import {
  CUSTOMER_MODEL,
  Customer,
  CustomerDocument,
} from '../schema/common/customer.schema';

@Injectable()
export class CustomerRepository extends EntityRepository<
  Customer,
  CustomerModel
> {
  constructor(
    @InjectModel(CUSTOMER_MODEL)
    private readonly customerModel: Model<CustomerDocument>,
    private readonly customerFactory: CustomerFactory,
  ) {
    super(customerModel, customerFactory);
  }

  async findAll(findAllQueryDto: FindAllQueryDTO): Promise<CustomerModel[]> {
    const { order_by, limit, page, sort_by } = findAllQueryDto;

    const customers = await this.customerModel
      .find()
      .select([
        '_id',
        'IdentificationNumber',
        'NameEn',
        'NameBn',
        'Email',
        'ContactNumber',
        'CustomerType',
      ])
      .sort({ [sort_by]: order_by })
      .limit(limit)
      .skip(limit * (page - 1));

    return customers.map((customerSchema) =>
      this.customerFactory.createFromSchema(customerSchema),
    );
  }
}
