import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ErrorLogRecordModel } from 'src/logging/domain/entities/error-log-record.entity';
import { SuccessLogRecordModel } from 'src/logging/domain/entities/success-log-record.entity';
import { ILoggingRepository } from '../../application/interfaces/logging-repository.interface';
import {
  ERROR_LOG_RECORD_MODEL,
  ErrorLogRecord,
  ErrorLogRecordDocument,
} from '../schemas/error-log-record.schema';
import {
  SUCCESS_LOG_RECORD_MODEL,
  SuccessLogRecord,
  SuccessLogRecordDocument,
} from '../schemas/success-log-record.schema';

@Injectable()
export class DatabaseLoggingRepository implements ILoggingRepository {
  constructor(
    @InjectModel(SUCCESS_LOG_RECORD_MODEL)
    private readonly successLogRecordModel: Model<SuccessLogRecordDocument>,
    @InjectModel(ERROR_LOG_RECORD_MODEL)
    private readonly errorLogRecordModel: Model<ErrorLogRecordDocument>,
  ) {}

  async createSuccessLog(
    user: Object,
    userAgent: string,
    requestedAt: any,
    receivedAt: string,
    ip: string,
    requestMethod: string,
    path: string,
    requestQuery: Object,
    requestBody: Object,
    responseTime: number,
    statusCode: number,
  ) {
    const successLogRecordObject = new SuccessLogRecordModel(
      user,
      userAgent,
      receivedAt,
      ip,
      requestMethod,
      path,
      requestQuery,
      requestBody,
      statusCode,
      requestedAt,
      responseTime,
    );

    const successLogRecordSchemaObject = new SuccessLogRecord();
    successLogRecordSchemaObject.User = successLogRecordObject.User;
    successLogRecordSchemaObject.UserAgent = successLogRecordObject.UserAgent;
    successLogRecordSchemaObject.ReceivedAt = successLogRecordObject.ReceivedAt;
    successLogRecordSchemaObject.IP = successLogRecordObject.IP;
    successLogRecordSchemaObject.RequestMethod =
      successLogRecordObject.RequestMethod;
    successLogRecordSchemaObject.Path = successLogRecordObject.Path;
    successLogRecordSchemaObject.RequestQuery =
      successLogRecordObject.RequestQuery;
    successLogRecordSchemaObject.RequestBody =
      successLogRecordObject.RequestBody;
    successLogRecordSchemaObject.StatusCode = successLogRecordObject.StatusCode;
    successLogRecordSchemaObject.RequestedAt =
      successLogRecordObject.RequestedAt;
    successLogRecordSchemaObject.ResponseTime =
      successLogRecordObject.ResponseTime;

    const successLogRecord = new this.successLogRecordModel(
      successLogRecordSchemaObject,
    );

    await successLogRecord.save();
  }

  async createErrorLog(
    user: Object,
    userAgent: string,
    receivedAt: string,
    ip: string,
    requestMethod: string,
    path: string,
    requestQuery: Object,
    requestBody: Object,
    exceptionType: string,
    statusCode: number,
    errorMessage: any,
  ) {
    const errorLogRecordObject = new ErrorLogRecordModel(
      user,
      userAgent,
      receivedAt,
      ip,
      requestMethod,
      path,
      requestQuery,
      requestBody,
      statusCode,
      exceptionType,
      errorMessage,
    );

    const errorLogRecordSchemaObject = new ErrorLogRecord();
    errorLogRecordSchemaObject.User = errorLogRecordObject.User;
    errorLogRecordSchemaObject.UserAgent = errorLogRecordObject.UserAgent;
    errorLogRecordSchemaObject.ReceivedAt = errorLogRecordObject.ReceivedAt;
    errorLogRecordSchemaObject.IP = errorLogRecordObject.IP;
    errorLogRecordSchemaObject.RequestMethod =
      errorLogRecordObject.RequestMethod;
    errorLogRecordSchemaObject.Path = errorLogRecordObject.Path;
    errorLogRecordSchemaObject.RequestQuery = errorLogRecordObject.RequestQuery;
    errorLogRecordSchemaObject.RequestBody = errorLogRecordObject.RequestBody;
    errorLogRecordSchemaObject.StatusCode = errorLogRecordObject.StatusCode;
    errorLogRecordSchemaObject.ExceptionType =
      errorLogRecordObject.ExceptionType;
    errorLogRecordSchemaObject.ErrorMessage = errorLogRecordObject.ErrorMessage;

    const errorLogRecord = new this.errorLogRecordModel(
      errorLogRecordSchemaObject,
    );

    await errorLogRecord.save();
  }
}
