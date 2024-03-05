import { Prop, Schema } from '@nestjs/mongoose';
import { BaseCustomerSchema } from './base-customer.schema';

@Schema()
export class OrganizationCustomerSchema extends BaseCustomerSchema {
  constructor() {
    super();
  }

  @Prop({ trim: true })
  TIN: string;

  @Prop({ trim: true })
  Fax: string;

  @Prop({ trim: true })
  RegistrationNumber: string;
}
