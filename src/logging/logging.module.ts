import { Module } from '@nestjs/common';
import { LoggingService } from './application/logging.service';
import { LoggerType } from './domain/enums/logger-type.enum';
import { RegisterMongooseSchemasModule } from './infrastructure/register-mongoose-schemas.module';
import { DatabaseLoggingRepository } from './infrastructure/repositories/database-logging.repository';

@Module({
  imports: [RegisterMongooseSchemasModule],
  exports: [],
  providers: [
    {
      provide: LoggerType.DatabaseLogger,
      useClass: DatabaseLoggingRepository,
    },
    { provide: LoggingService, useClass: LoggingService },
  ],
})
export class LoggingModule {}
