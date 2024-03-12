import { Prop, Schema } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { CustomerSchema } from '../common/customer.schema';
import { BankAccountSchema } from './bank-account.schema';
import { ContactPersonSchema } from './contact-person.schema';
import { OrganizationAttachmentSchema } from './organization-attachment.schema';

@Schema()
export class OrganizationSchema extends CustomerSchema {
  @Prop({ require: true, type: Types.ObjectId })
  ParentOrganization: string;

  @Prop()
  FaxNumber: string;

  @Prop()
  Website: string;

  @Prop({ type: Array() })
  ContactPeoples: ContactPersonSchema;

  @Prop({ type: Array() })
  BankAccounts: BankAccountSchema;

  @Prop({ type: Array() })
  Attachments: OrganizationAttachmentSchema[];
}

export type OrganizationDocument = OrganizationSchema & Document;
export const ORGANIZATION_MODEL = OrganizationSchema.name;
