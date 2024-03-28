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
  registrationNumber: string;

  @Prop()
  fax: string;

  @Prop()
  website: string;

  @Prop()
  logo: string;

  @Prop({ type: Array(BranchSchema) })
  branches: Branch[];

  @Prop({ type: Array(ContactPersonSchema) })
  contactPeoples: ContactPerson[];

  @Prop({ type: Array(BankAccountSchema) })
  bankAccounts: BankAccount[];

  @Prop({ type: Array(OrganizationAttachmentSchema) })
  attachments: OrganizationAttachment[];
}

export const OrganizationSchema = SchemaFactory.createForClass(Organization);

export type OrganizationDocument = Organization & Document;
export const ORGANIZATION_MODEL = Organization.name;
