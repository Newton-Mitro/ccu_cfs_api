import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MessagingModule } from 'src/messaging/messaging.module';
import { AddPersonHandler } from './application/commands/person/add-person/add-person.command.handler';
import { PersonAddedEventHandler } from './application/events/person/person-added.event.handler';
import { CustomersService } from './application/services/customers.service';
import { OrganizationsService } from './application/services/organizations.service';
import { PeoplesService } from './application/services/peoples.service';
import { PersonAggregateToSchemaMapper } from './infrastructure/mapping/aggregate-to-schema/person-aggregate-to-schema.mapper';
import { PersonSchemaToAggregateMapper } from './infrastructure/mapping/schema-to-aggregate/person-schema-to-aggregate.mapper';
import { RegisterMongooseSchemasModule } from './infrastructure/register-mongoose-schemas.module';
import { CustomerRepository } from './infrastructure/repositories/customer.repository';
import { PeoplesRepository } from './infrastructure/repositories/peoples.repository';
import { CustomersController } from './presentation/controllers/customers.controller';
import { OrganizationsController } from './presentation/controllers/organizations.controller';
import { PeoplesController } from './presentation/controllers/peoples.controller';

export const CommandHandlers = [AddPersonHandler];
export const EventHandlers = [PersonAddedEventHandler];
export const Mappers = [
  PersonAggregateToSchemaMapper,
  PersonSchemaToAggregateMapper,
];
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
