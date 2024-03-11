import { Inject, Injectable } from '@nestjs/common';
import { LoggerType } from '../domain/enums/logger-type.enum';
import { RequestResponseLogResponse } from '../presentation/contract/request-response-log.response';
import { ILoggingRepository } from './interfaces/logging-repository.interface';

@Injectable()
export class RequestResponseLogService {
  _iLoggingRepository: ILoggingRepository;
  constructor(
    @Inject(LoggerType.DatabaseLogger) iLoggingRepository: ILoggingRepository,
  ) {
    this._iLoggingRepository = iLoggingRepository;
  }

  createLog(requestResponseLog: RequestResponseLogResponse) {
    this._iLoggingRepository.createLog(requestResponseLog);
  }
}
