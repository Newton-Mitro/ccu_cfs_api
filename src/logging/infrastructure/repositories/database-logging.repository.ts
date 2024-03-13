import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { ILoggingRepository } from '../../application/interfaces/logging-repository.interface';
import { ErrorLogRecordDocument } from '../schemas/error-log-record.schema';
import { SuccessLogRecordDocument } from '../schemas/success-log-record.schema';
import { ErrorLogRecordModel } from 'src/logging/domain/models/error-log-record.entity';
import { SuccessLogRecordModel } from 'src/logging/domain/models/success-log-record.entity';

@Injectable()
export class DatabaseLoggingRepository implements ILoggingRepository {
  constructor(
    @InjectModel('SuccessLog')
    private readonly successLogRecordModel: Model<SuccessLogRecordDocument>,
    @InjectModel('ErrorLog')
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
      new Types.ObjectId().toHexString(),
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

    // const successLogRecordSchemaObject = new SuccessLogRecordSchema();
    const successLogRecordSchemaObject = {
      _id: new Types.ObjectId(),
      User: {},
      UserAgent: successLogRecordObject.UserAgent,
      ReceivedAt: successLogRecordObject.ReceivedAt,
      IP: successLogRecordObject.IP,
      RequestMethod: successLogRecordObject.RequestMethod,
      Path: successLogRecordObject.Path,
      RequestQuery: successLogRecordObject.RequestQuery,
      RequestBody: successLogRecordObject.RequestBody,
      StatusCode: successLogRecordObject.StatusCode,
      RequestedAt: successLogRecordObject.RequestedAt,
      ResponseTime: successLogRecordObject.ResponseTime,
    };

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
      new Types.ObjectId().toHexString(),
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

    // const errorLogRecordSchemaObject = new ErrorLogRecordSchema();
    const errorLogRecordSchemaObject = {
      _id: new Types.ObjectId(),
      User: errorLogRecordObject.User,
      UserAgent: errorLogRecordObject.UserAgent,
      ReceivedAt: errorLogRecordObject.ReceivedAt,
      IP: errorLogRecordObject.IP,
      RequestMethod: errorLogRecordObject.RequestMethod,
      Path: errorLogRecordObject.Path,
      RequestQuery: errorLogRecordObject.RequestQuery,
      RequestBody: errorLogRecordObject.RequestBody,
      StatusCode: errorLogRecordObject.StatusCode,
      ExceptionType: errorLogRecordObject.ExceptionType,
      ErrorMessage: errorLogRecordObject.ErrorMessage,
    };

    const errorLogRecord = new this.errorLogRecordModel(
      errorLogRecordSchemaObject,
    );

    await errorLogRecord.save();
  }
}
