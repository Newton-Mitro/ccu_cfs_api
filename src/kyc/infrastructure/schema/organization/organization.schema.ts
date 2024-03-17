import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Customer } from '../common/customer.schema';
import { BankAccount, BankAccountSchema } from './bank-account.schema';
import { Branch, BranchSchema } from './branch.schema';
import { ContactPerson, ContactPersonSchema } from './contact-person.schema';
import {
  OrganizationAttachment,
  OrganizationAttachmentSchema,
} from './organization-attachment.schema';

@Schema()
export class Organization extends Customer {
  @Prop({
    require: true,
    unique: true,
    trim: true,
  })
  RegistrationNumber: string;

  @Prop()
  FaxNumber: string;

  @Prop()
  Website: string;

  @Prop({ type: Object(OrganizationAttachmentSchema) })
  Logo: OrganizationAttachment;

  @Prop({ type: Array(BranchSchema) })
  Branches: Branch[];

  @Prop({ type: Array(ContactPersonSchema) })
  ContactPeoples: ContactPerson[];

  @Prop({ type: Array(BankAccountSchema) })
  BankAccounts: BankAccount[];

  @Prop({ type: Array(OrganizationAttachmentSchema) })
  Attachments: OrganizationAttachment[];
}

export const OrganizationSchema = SchemaFactory.createForClass(Organization);

export type OrganizationDocument = Organization & Document;
export const ORGANIZATION_MODEL = Organization.name;
