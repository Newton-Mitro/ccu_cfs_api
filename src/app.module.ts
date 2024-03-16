import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { RequestResponseInterceptor } from './common/interceptors/request-response.interceptor';
import { DatabaseModule } from './common/mongoose/database.module';
import { KYCModule } from './kyc/kyc.module';
import { LoggerType } from './logging/domain/enums/logger-type.enum';
import { DatabaseLoggingRepository } from './logging/infrastructure/repositories/database-logging.repository';
import { LoggingModule } from './logging/logging.module';
import { SubsidiaryLedgerAccountModule } from './subsidiary-accounting/subsidiary-ledgers/subsidiary-ledger-account.module';
import { UsersModule } from './users/users.module';

@Module({
  controllers: [AppController],
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    SubsidiaryLedgerAccountModule,
    DatabaseModule,
    KYCModule,
    LoggingModule,
    AuthModule,
    UsersModule,
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
    // {
    //   provide: APP_GUARD,
    //   useClass: JwtAuthGuard,
    // },
  ],
})
export class AppModule {}
