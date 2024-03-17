import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { MessagingModule } from 'src/messaging/messaging.module';
import { CustomersService } from './application/services/customers.service';
import { OrganizationsService } from './application/services/organizations.service';
import { PeoplesService } from './application/services/peoples.service';
import { CustomerFactory } from './infrastructure/factories/customer.factory';
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
    CustomerFactory,
  ],
})
export class KYCModule {}
