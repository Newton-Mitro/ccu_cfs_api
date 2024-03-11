import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ILoggingRepository } from '../application/interfaces/logging-repository.interface';
import { RequestResponseLogModel } from '../domain/entities/request-response-log.entity';
import {
  REQUEST_RESPONSE_LOG_MODEL,
  RequestResponseLogDocument,
} from './schemas/request-response-log.schema';

@Injectable()
export class DatabaseLoggingRepository implements ILoggingRepository {
  constructor(
    @InjectModel(REQUEST_RESPONSE_LOG_MODEL)
    private readonly requestResponseLogModel: Model<RequestResponseLogDocument>,
  ) {}

  async createLog(requestResponseLogModel: RequestResponseLogModel) {
    const createdRequestResponseLog = new this.requestResponseLogModel(
      requestResponseLogModel,
    );

    await createdRequestResponseLog.save();
  }
}
