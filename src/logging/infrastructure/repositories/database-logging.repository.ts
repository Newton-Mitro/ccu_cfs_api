import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { ErrorLogRecordModel } from 'src/logging/domain/models/error-log-record.entity';
import { SuccessLogRecordModel } from 'src/logging/domain/models/success-log-record.entity';
import { ILoggingRepository } from '../../application/interfaces/logging-repository.interface';
import { ErrorLogRecordDocument } from '../schemas/error-log-record.schema';
import { SuccessLogRecordDocument } from '../schemas/success-log-record.schema';

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
    method: string,
    path: string,
    query: Object,
    params: Object,
    body: Object,
    responseTime: number,
    statusCode: number,
  ) {
    const successLogRecordObject = new SuccessLogRecordModel(
      new Types.ObjectId().toHexString(),
      user,
      userAgent,
      receivedAt,
      ip,
      method,
      path,
      query,
      params,
      body,
      statusCode,
      requestedAt,
      responseTime,
    );

    // const successLogRecordSchemaObject = new SuccessLogRecordSchema();
    const successLogRecordSchemaObject = {
      _id: new Types.ObjectId(),
      user: successLogRecordObject.user,
      userAgent: successLogRecordObject.userAgent,
      receivedAt: successLogRecordObject.receivedAt,
      ip: successLogRecordObject.ip,
      method: successLogRecordObject.method,
      path: successLogRecordObject.path,
      query: successLogRecordObject.query,
      params: successLogRecordObject.params,
      body: successLogRecordObject.body,
      statusCode: successLogRecordObject.statusCode,
      requestedAt: successLogRecordObject.requestedAt,
      responseTime: successLogRecordObject.responseTime,
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
    method: string,
    path: string,
    query: Object,
    params: Object,
    body: Object,
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
      method,
      path,
      query,
      params,
      body,
      statusCode,
      exceptionType,
      errorMessage,
    );

    // const errorLogRecordSchemaObject = new ErrorLogRecordSchema();
    const errorLogRecordSchemaObject = {
      _id: new Types.ObjectId(),
      user: errorLogRecordObject.user,
      userAgent: errorLogRecordObject.userAgent,
      receivedAt: errorLogRecordObject.receivedAt,
      ip: errorLogRecordObject.ip,
      method: errorLogRecordObject.method,
      path: errorLogRecordObject.path,
      query: errorLogRecordObject.query,
      params: errorLogRecordObject.params,
      body: errorLogRecordObject.body,
      statusCode: errorLogRecordObject.statusCode,
      exceptionType: errorLogRecordObject.exceptionType,
      errorMessage: errorLogRecordObject.errorMessage,
    };

    const errorLogRecord = new this.errorLogRecordModel(
      errorLogRecordSchemaObject,
    );

    await errorLogRecord.save();
  }
}
