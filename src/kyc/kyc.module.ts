import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MessagingModule } from '../messaging/messaging.module';
import { AddOrganizationCommandHandler } from './organization/application/commands/add-organization/add-organization.command.handler';
import { UpdateOrganizationCommandHandler } from './organization/application/commands/update-organization/update-organization.command.handler';
import { OrganizationAggregateToResponseMapper } from './organization/application/mapping/organization-aggregate-to-response.mapper';
import { OrganizationsService } from './organization/application/services/organizations.service';
import { OrganizationAggregateToSchemaMapper } from './organization/infrastructure/mapping/organization-aggregate-to-schemal.mapper';
import { OrganizationSchemaToAggregateMapper } from './organization/infrastructure/mapping/organization-schema-to-aggregate.mapper';
import { OrganizationsRepository } from './organization/infrastructure/repositories/organizations.repository';
import { OrganizationsController } from './organization/presentation/organizations.controller';
import { AddPersonHandler } from './person/application/commands/add-person/add-person.command.handler';
import { RemovePersonHandler } from './person/application/commands/remove-person/remove-person.command.handler';
import { UpdatePersonHandler } from './person/application/commands/update-person/update-person.command.handler';
import { PersonAddedEventHandler } from './person/application/events/person-added.event.handler';
import { PersonUpdatedEventHandler } from './person/application/events/person-updated.event.handler';
import { PersonAggregateToResponseMapper } from './person/application/mapping/person-aggregate-to-response.mapper';
import { GetPersonQueryHandler } from './person/application/queries/get-person/get-person.query.handler';
import { ListPeoplesQueryHandler } from './person/application/queries/list-peoples/list-peoples.query.handler';
import { PeoplesService } from './person/application/services/peoples.service';
import { PersonAggregateToSchemaMapper } from './person/infrastructure/mapping/person-aggregate-to-schema.mapper';
import { PersonSchemaToAggregateMapper } from './person/infrastructure/mapping/person-schema-to-aggregate.mapper';
import { PeoplesRepository } from './person/infrastructure/repositories/peoples.repository';
import { PeoplesController } from './person/presentation/peoples.controller';
import { RegisterMongooseSchemasModule } from './register-mongoose-schemas.module';
import { CustomersService } from './shared/application/services/customers.service';
import { CustomerRepository } from './shared/infrastructure/repositories/customer.repository';
import { CustomersController } from './shared/presentation/customers.controller';

export const CommandHandlers = [
  AddPersonHandler,
  UpdatePersonHandler,
  RemovePersonHandler,
  AddOrganizationCommandHandler,
  UpdateOrganizationCommandHandler,
];

export const QueryHandlers = [GetPersonQueryHandler, ListPeoplesQueryHandler];

export const EventHandlers = [
  PersonAddedEventHandler,
  PersonUpdatedEventHandler,
];

export const Mappers = [
  PersonAggregateToSchemaMapper,
  PersonSchemaToAggregateMapper,
  PersonAggregateToResponseMapper,
  OrganizationAggregateToResponseMapper,
  OrganizationSchemaToAggregateMapper,
  OrganizationAggregateToSchemaMapper,
];

export const Services = [
  PeoplesService,
  OrganizationsService,
  CustomersService,
];

export const Repositories = [
  CustomerRepository,
  PeoplesRepository,
  OrganizationsRepository,
];

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
    ...QueryHandlers,
  ],
})
export class KYCModule {}
