import { Types } from 'mongoose';
import { IBusinessModelMapper } from 'src/common/database/mongoose/business-model.mapper';
import { ISchemaMapper } from 'src/common/database/mongoose/schema.mapper';
import { ErrorLogRecordModel } from 'src/logging/domain/models/error-log-record.entity';
import { ErrorLogRecord } from '../schemas/error-log-record.schema';

export class MapErrorLogRecordFactory
  implements
    ISchemaMapper<ErrorLogRecord, ErrorLogRecordModel>,
    IBusinessModelMapper<ErrorLogRecord, ErrorLogRecordModel>
{
  mapAggregateToSchema(entity: ErrorLogRecordModel): ErrorLogRecord {
    return {
      _id: new Types.ObjectId(entity.id),
      user: entity.user,
      userAgent: entity.userAgent,
      receivedAt: entity.receivedAt,
      ip: entity.ip,
      method: entity.method,
      path: entity.path,
      query: entity.query,
      params: entity.params,
      body: entity.body,
      statusCode: entity.statusCode,
      exceptionType: entity.exceptionType,
      errorMessage: entity.errorMessage,
      createdAt: new Date(),
      updatedAt: new Date(),
      createdBy: '',
      updatedBy: '',
    };
  }

  mapSchemaToAggregate(entitySchema: ErrorLogRecord): ErrorLogRecordModel {
    return new ErrorLogRecordModel(
      entitySchema._id.toHexString(),
      entitySchema.user,
      entitySchema.userAgent,
      entitySchema.receivedAt,
      entitySchema.ip,
      entitySchema.method,
      entitySchema.path,
      entitySchema.query,
      entitySchema.params,
      entitySchema.body,
      entitySchema.statusCode,
      entitySchema.exceptionType,
      entitySchema.errorMessage,
    );
  }
}
