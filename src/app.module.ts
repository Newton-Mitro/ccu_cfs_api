import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './infrastructure/mongoose/database.module';
import { MongooseKYCModelsModule } from './subsidiary-accounting-module/kyc/infrastructure/mongoose-models.module';
import { KycModule } from './subsidiary-accounting-module/kyc/kyc.module';
import { SubsidiaryLedgerAccountModule } from './subsidiary-accounting-module/subsidiary-ledgers/subsidiary-ledger-account.module';

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
