import { Inject, Injectable } from '@nestjs/common';
import { AuthUserType } from '../../common/types/auth-user.type';
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
    createdAt: Date,
    updatedAt: Date,
    createdBy: AuthUserType | null,
    updatedBy: AuthUserType | null,
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
      createdAt,
      updatedAt,
      createdBy,
      updatedBy,
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
    createdAt: Date,
    updatedAt: Date,
    createdBy: AuthUserType | null,
    updatedBy: AuthUserType | null,
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
      createdAt,
      updatedAt,
      createdBy,
      updatedBy,
    );
  }
}
