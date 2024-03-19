import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { FindAllQueryRequest } from 'src/common/contract/find-all-query.dto';
import { EntityRepository } from 'src/config/database/mongoose/entity.repository';
import { CustomerModel } from 'src/kyc/domain/models/common/customer.model';
import { CustomerModelToSchemaMapper } from '../mapping/model-to-schema/customer-model-to-schema.mapper';
import { CustomerSchemaToModelMapper } from '../mapping/schema-to-model/customer-schema-to-model.mapper';
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
    private readonly customerSchemaMapper: CustomerModelToSchemaMapper,
    private readonly customerBusinessModelMapper: CustomerSchemaToModelMapper,
  ) {
    super(customerModel, customerSchemaMapper, customerBusinessModelMapper);
  }

  async findAll(
    findAllQueryDto: FindAllQueryRequest,
  ): Promise<CustomerModel[]> {
    const { order_by, limit, page, sort_by } = findAllQueryDto;

    const customers = await this.customerModel
      .find()

      .sort({ [sort_by]: order_by })
      .limit(limit)
      .skip(limit * (page - 1));

    return customers.map((customerSchema) =>
      this.customerBusinessModelMapper.mapSchemaToBusinessModel(customerSchema),
    );
  }

  async findById(id: string): Promise<CustomerModel | null> {
    const customer = await this.customerModel.findById(new Types.ObjectId(id));
    if (customer) {
      return this.customerBusinessModelMapper.mapSchemaToBusinessModel(
        customer,
      );
    }
    return null;
  }
}
