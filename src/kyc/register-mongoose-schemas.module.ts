import { Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import {
  PERSON_MODEL,
  PersonSchema,
} from './person/infrastructure/schema/person.schema';
import {
  CUSTOMER_MODEL,
  CustomerSchema,
} from './shared/infrastructure/schema/customer.schema';
import {
  ORGANIZATION_MODEL,
  OrganizationSchema,
} from './organization/infrastructure/schema/organization.schema';

const MODELS = [
  {
    name: CUSTOMER_MODEL,
    schema: CustomerSchema,
    discriminators: [
      {
        name: PERSON_MODEL,
        schema: PersonSchema,
      },
      {
        name: ORGANIZATION_MODEL,
        schema: OrganizationSchema,
      },
    ],
  },
];

@Global()
@Module({
  imports: [MongooseModule.forFeature(MODELS)],
  exports: [MongooseModule],
})
export class RegisterMongooseSchemasModule {}
