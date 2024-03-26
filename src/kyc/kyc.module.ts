import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MessagingModule } from 'src/messaging/messaging.module';
import { CreatePersonHandler } from './application/commands/person/create-person/create-person.command.handler';
import { CustomersService } from './application/services/customers.service';
import { OrganizationsService } from './application/services/organizations.service';
import { PeoplesService } from './application/services/peoples.service';
import { PersonModelToSchemaMapper } from './infrastructure/mapping/model-to-schema/person-model-to-schema.mapper';
import { PersonSchemaToModelMapper } from './infrastructure/mapping/schema-to-model/person-schema-to-model.mapper';
import { RegisterMongooseSchemasModule } from './infrastructure/register-mongoose-schemas.module';
import { CustomerRepository } from './infrastructure/repositories/customer.repository';
import { PeoplesRepository } from './infrastructure/repositories/peoples.repository';
import { CustomersController } from './presentation/controllers/customers.controller';
import { OrganizationsController } from './presentation/controllers/organizations.controller';
import { PeoplesController } from './presentation/controllers/peoples.controller';

export const CommandHandlers = [CreatePersonHandler];
export const EventHandlers = [];
export const Mappers = [PersonModelToSchemaMapper, PersonSchemaToModelMapper];
export const Services = [
  PeoplesService,
  OrganizationsService,
  CustomersService,
];

export const Repositories = [CustomerRepository, PeoplesRepository];

@Module({
  imports: [RegisterMongooseSchemasModule, MessagingModule, CqrsModule],
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
