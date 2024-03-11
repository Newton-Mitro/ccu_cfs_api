import { Module } from '@nestjs/common';
import { RequestResponseLogService } from './application/request-response-log.service';
import { LoggerType } from './domain/enums/logger-type.enum';
import { DatabaseLoggingRepository } from './infrastructure/database-logging.repository';

@Module({
  imports: [],
  exports: [],
  providers: [
    {
      provide: LoggerType.DatabaseLogger,
      useClass: DatabaseLoggingRepository,
    },
    { provide: RequestResponseLogService, useClass: RequestResponseLogService },
  ],
})
export class LoggingModule {}
