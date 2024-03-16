import { Module } from '@nestjs/common';
import { MessagingModule } from 'src/messaging/messaging.module';
import { CustomersService } from './application/services/customers.service';
import { OrganizationsService } from './application/services/organizations.service';
import { PeoplesService } from './application/services/peoples.service';
import { MongooseKYCModelsModule } from './infrastructure/mongoose-kyc-models.module';
import { CustomersController } from './presentation/controllers/customers.controller';
import { OrganizationsController } from './presentation/controllers/organizations.controller';
import { PeoplesController } from './presentation/controllers/peoples.controller';

@Module({
  imports: [MongooseKYCModelsModule, MessagingModule],
  controllers: [
    CustomersController,
    PeoplesController,
    OrganizationsController,
  ],
  providers: [PeoplesService, OrganizationsService, CustomersService],
})
export class KYCModule {}
