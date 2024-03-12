import { Global, Module } from '@nestjs/common';
import { MongooseModule, SchemaFactory } from '@nestjs/mongoose';
import {
  CUSTOMER_MODEL,
  CustomerSchema,
} from './schema/common/customer.schema';
import {
  ORGANIZATION_MODEL,
  OrganizationSchema,
} from './schema/organization/organization.schema';
import { PERSON_MODEL, PersonSchema } from './schema/person/person.schema';

const MODELS = [
  {
    name: CUSTOMER_MODEL,
    schema: SchemaFactory.createForClass(CustomerSchema),
    discriminators: [
      {
        name: PERSON_MODEL,
        schema: SchemaFactory.createForClass(PersonSchema),
      },
      {
        name: ORGANIZATION_MODEL,
        schema: SchemaFactory.createForClass(OrganizationSchema),
      },
    ],
  },
];

@Global()
@Module({
  imports: [MongooseModule.forFeature(MODELS)],
  exports: [MongooseModule],
})
export class MongooseKYCModelsModule {}
