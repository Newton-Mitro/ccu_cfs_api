import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { OrganizationCustomer } from './organization-customer.schema';

@Schema()
export class OrganizationAccountHolder extends OrganizationCustomer {
  constructor() {
    super();
  }

  @Prop()
  accountHolderId: string;
}

export type OrganizationAccountHolderDocument = OrganizationAccountHolder &
  Document;
export const ORGANIZATION_ACCOUNT_HOLDER_MODEL = OrganizationAccountHolder.name;
export const OrganizationAccountHolderSchema = SchemaFactory.createForClass(
  OrganizationAccountHolder,
);
