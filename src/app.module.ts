import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseKYCModelsModule } from './kyc/infrastructure/mongoose-kyc-models.module';
import { KycModule } from './kyc/kyc.module';
import { SubsidiaryLedgerAccountModule } from './subsidiary-accounting/subsidiary-ledgers/subsidiary-ledger-account.module';
import { DatabaseModule } from './common/mongoose/database.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    MongooseKYCModelsModule,
    KycModule,
    SubsidiaryLedgerAccountModule,
  ],
})
export class AppModule {}
