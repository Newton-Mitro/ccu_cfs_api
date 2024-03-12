import { Injectable } from '@nestjs/common';
import { ILoggingRepository } from '../../application/interfaces/logging-repository.interface';
import { LogRecordModel } from '../../domain/entities/log-record.entity';

@Injectable()
export class EmailLoggingService implements ILoggingRepository {
  async createSuccessLog(requestResponseLogModel: LogRecordModel) {
    throw new Error('Method not implemented.');
  }
  async createErrorLog(requestResponseLogModel: LogRecordModel) {
    throw new Error('Method not implemented.');
  }
}
