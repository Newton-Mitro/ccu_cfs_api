import { Injectable } from '@nestjs/common';
import { ILoggingRepository } from '../application/interfaces/logging-repository.interface';
import { RequestResponseLogModel } from '../domain/entities/request-response-log.entity';

@Injectable()
export class FileLoggingService implements ILoggingRepository {
  createLog(requestResponseLogModel: RequestResponseLogModel) {
    throw new Error('Method not implemented.');
  }
}
