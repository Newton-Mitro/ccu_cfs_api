import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { BankAccount, BankAccountSchema } from './bank-account.schema';
import { ContactPerson, ContactPersonSchema } from './contact-person.schema';
import { Customer } from './customer.schema';

@Schema()
export class Organization extends Customer {
  @Prop({ require: true, type: Types.ObjectId })
  ParentOrganization: string;

  @Prop()
  FaxNumber: string;

  @Prop()
  Website: string;

  @Prop({ type: Array(ContactPersonSchema) })
  ContactPeoples: ContactPerson;

  @Prop({ type: Array(BankAccountSchema) })
  BankAccounts: BankAccount;
}

export type OrganizationDocument = Organization & Document;
export const ORGANIZATION_MODEL = Organization.name;

export const OrganizationSchema = SchemaFactory.createForClass(Organization);
