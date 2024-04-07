import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseCustomer } from './base-customer.schema';

@Schema()
export class OrganizationCustomer extends BaseCustomer {
  constructor() {
    super();
  }

  @Prop()
  organizationId: string;

  @Prop({ trim: true })
  tin: string;

  @Prop({ trim: true })
  fax: string;

  @Prop({ trim: true })
  registrationNumber: string;
}

export type OrganizationCustomerDocument = OrganizationCustomer & Document;
export const ORGANIZATION_CUSTOMER_MODEL = OrganizationCustomer.name;
export const OrganizationCustomerSchema =
  SchemaFactory.createForClass(OrganizationCustomer);
