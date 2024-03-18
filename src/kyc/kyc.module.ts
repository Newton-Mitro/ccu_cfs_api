import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MessagingModule } from 'src/messaging/messaging.module';
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

@Module({
  imports: [MongooseKYCModelsModule, MessagingModule, CqrsModule],
  controllers: [
    CustomersController,
    PeoplesController,
    OrganizationsController,
  ],
  providers: [
    PeoplesService,
    OrganizationsService,
    CustomersService,
    CustomerRepository,
    CustomerSchemaMapper,
    CustomerBusinessModelMapper,
    PersonSchemaMapper,
    PersonBusinessModelMapper,
    CustomerSchemaMapper,
    CustomerBusinessModelMapper,
  ],
})
export class KYCModule {}
