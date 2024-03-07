import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { BankAccount, BankAccountSchema } from './bank-account.schema';
import { ContactPerson, ContactPersonSchema } from './contact-person.schema';
import { Customer } from './customer.schema';

@Schema()
export class Organization extends Customer {
  @Prop({ require: true, type: Types.ObjectId })
  parentOrganization: string;

  @Prop({ require: true })
  phoneNumber: string;

  @Prop()
  faxNumber: string;

  @Prop()
  website: string;

  @Prop()
  logo: string;

  @Prop({ type: Array(ContactPersonSchema) })
  contactPeoples: ContactPerson;

  @Prop({ type: Array(BankAccountSchema) })
  bankAccounts: BankAccount;
}

export type OrganizationDocument = Organization & Document;
export const ORGANIZATION_MODEL = Organization.name;

export const OrganizationSchema = SchemaFactory.createForClass(Organization);
