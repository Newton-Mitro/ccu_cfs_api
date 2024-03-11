import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { RequestResponseInterceptor } from './common/interceptors/request-response.interceptor';
import { DatabaseModule } from './common/mongoose/database.module';
import { MongooseKYCModelsModule } from './kyc/infrastructure/mongoose-kyc-models.module';
import { KycModule } from './kyc/kyc.module';
import { LoggerType } from './logging/domain/enums/logger-type.enum';
import { DatabaseLoggingRepository } from './logging/infrastructure/database-logging.repository';
import { MongooseLoggingModelsModule } from './logging/infrastructure/mongoose-logging.module';
import { LoggingModule } from './logging/logging.module';
import { SubsidiaryLedgerAccountModule } from './subsidiary-accounting/subsidiary-ledgers/subsidiary-ledger-account.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    MongooseKYCModelsModule,
    KycModule,
    SubsidiaryLedgerAccountModule,
    LoggingModule,
    MongooseLoggingModelsModule,
  ],
  providers: [
    {
      provide: LoggerType.DatabaseLogger,
      useClass: DatabaseLoggingRepository,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: RequestResponseInterceptor,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
