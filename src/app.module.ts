import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AuthModule } from './access-control/auth/auth.module';
import { UsersModule } from './access-control/users/users.module';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { RequestResponseInterceptor } from './common/interceptors/request-response.interceptor';
import { DatabaseModule } from './config/database/mongoose/database.module';
import { KYCModule } from './kyc/kyc.module';
import { LoggerType } from './logging/domain/enums/logger-type.enum';
import { DatabaseLoggingRepository } from './logging/infrastructure/repositories/database-logging.repository';
import { LoggingModule } from './logging/logging.module';
import { SubsidiaryLedgersModule } from './subsidiary-accounting/subsidiary-ledgers/subsidiary-ledgers.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'uploads'),
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    SubsidiaryLedgersModule,
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
    //   useClass: PermissionGuard,
    // },
  ],
})
export class AppModule {}
