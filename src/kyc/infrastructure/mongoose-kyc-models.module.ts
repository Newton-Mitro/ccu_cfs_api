import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CUSTOMER_MODEL, CustomerSchema } from './schema/customer.schema';
import {
  KYC_ATTACHMENT_MODEL,
  KycAttachmentSchema,
} from './schema/kyc-attachment.schema';
import {
  ORGANIZATION_MODEL,
  OrganizationSchema,
} from './schema/organization.schema';
import { PERSON_MODEL, PersonSchema } from './schema/person.schema';

const MODELS = [
  {
    name: CUSTOMER_MODEL,
    schema: CustomerSchema,
    discriminators: [
      { name: PERSON_MODEL, schema: PersonSchema },
      { name: ORGANIZATION_MODEL, schema: OrganizationSchema },
    ],
  },
  {
    name: KYC_ATTACHMENT_MODEL,
    schema: KycAttachmentSchema,
  },
];

@Global()
@Module({
  imports: [MongooseModule.forFeature(MODELS)],
  exports: [MongooseModule],
})
export class MongooseKYCModelsModule {}
