import { Module } from '@nestjs/common';
import { CustomersService } from './application/customers.service';
import { KycAttachmentsService } from './application/kyc-attachments.service';
import { OrganizationsService } from './application/organizations.service';
import { PeoplesService } from './application/peoples.service';
import { CustomersModule } from './customers.module';
import { KycAttachmentsModule } from './kyc-attachments.module';
import { OrganizationsModule } from './organizations.module';
import { PeoplesModule } from './peoples.module';

@Module({
  imports: [
    KycAttachmentsModule,
    OrganizationsModule,
    PeoplesModule,
    CustomersModule,
  ],
  providers: [
    PeoplesService,
    OrganizationsService,
    KycAttachmentsService,
    CustomersService,
  ],
})
export class KycModule {}
