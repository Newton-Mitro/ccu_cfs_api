import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MessagingModule } from 'src/messaging/messaging.module';
import { CreatePersonHandler } from './application/commands/person/create-person/create-person.command.handler';
import { CustomersService } from './application/services/customers.service';
import { OrganizationsService } from './application/services/organizations.service';
import { PeoplesService } from './application/services/peoples.service';
import { CustomerSchemaMapper } from './infrastructure/mapping/business-model-mapping/customer-schema.mapper';
import { PersonSchemaMapper } from './infrastructure/mapping/business-model-mapping/person-schema.mapper';
import { CustomerBusinessModelMapper } from './infrastructure/mapping/schema-mapping/customer-business-model.mapper';
import { PersonBusinessModelMapper } from './infrastructure/mapping/schema-mapping/person-business-model.mapper';
import { MongooseKYCModelsModule } from './infrastructure/mongoose-kyc-models.module';
import { CustomerRepository } from './infrastructure/repositories/customer.repository';
import { CustomersController } from './presentation/controllers/customers.controller';
import { OrganizationsController } from './presentation/controllers/organizations.controller';
import { PeoplesController } from './presentation/controllers/peoples.controller';
import { PeoplesRepository } from './infrastructure/repositories/peoples.repository';

export const CommandHandlers = [CreatePersonHandler];
export const EventHandlers = [];
export const Mappers = [
  CustomerSchemaMapper,
  CustomerBusinessModelMapper,
  PersonSchemaMapper,
  PersonBusinessModelMapper,
  CustomerSchemaMapper,
  CustomerBusinessModelMapper,
];
export const Services = [
  PeoplesService,
  OrganizationsService,
  CustomersService,
];

export const Repositories = [CustomerRepository, PeoplesRepository];

@Module({
  imports: [MongooseKYCModelsModule, MessagingModule, CqrsModule],
  controllers: [
    CustomersController,
    PeoplesController,
    OrganizationsController,
  ],
  providers: [
    ...Services,
    ...Repositories,
    ...Mappers,
    ...CommandHandlers,
    ...EventHandlers,
  ],
})
export class KYCModule {}
