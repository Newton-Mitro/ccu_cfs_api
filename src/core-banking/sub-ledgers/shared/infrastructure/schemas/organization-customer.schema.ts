import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseCustomer } from './base-customer.schema';

@Schema()
export class OrganizationCustomer extends BaseCustomer {
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

export type OrganizationCustomerDocument = OrganizationCustomer & Document;
export const ORGANIZATION_CUSTOMER_MODEL = OrganizationCustomer.name;
export const OrganizationCustomerSchema =
  SchemaFactory.createForClass(OrganizationCustomer);
