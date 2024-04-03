import { Inject, Injectable } from '@nestjs/common';
import { LoggerType } from '../domain/enums/logger-type.enum';
import { ILoggingRepository } from './interfaces/logging-repository.interface';

@Injectable()
export class LoggingService {
  _iLoggingRepository: ILoggingRepository;
  constructor(
    @Inject(LoggerType.DatabaseLogger) iLoggingRepository: ILoggingRepository,
  ) {
    this._iLoggingRepository = iLoggingRepository;
  }

  async createSuccessLog(
    user: Object,
    userAgent: string,
    requestedAt: any,
    receivedAt: string,
    ip: string,
    method: string,
    path: string,
    query: Object,
    params: Object,
    body: Object,
    responseTime: number,
    statusCode: number,
  ) {
    await this._iLoggingRepository.createSuccessLog(
      user,
      userAgent,
      requestedAt,
      receivedAt,
      ip,
      method,
      path,
      query,
      params,
      body,
      responseTime,
      statusCode,
    );
  }

  async createErrorLog(
    user: Object,
    userAgent: string,
    receivedAt: string,
    ip: string,
    method: string,
    path: string,
    query: Object,
    params: Object,
    body: Object,
    exceptionType: string,
    statusCode: number,
    errorMessage: any,
  ) {
    await this._iLoggingRepository.createErrorLog(
      user,
      userAgent,
      receivedAt,
      ip,
      method,
      path,
      query,
      params,
      body,
      exceptionType,
      statusCode,
      errorMessage,
    );
  }
}
