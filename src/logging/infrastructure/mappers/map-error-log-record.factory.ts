import { Types } from 'mongoose';
import { ErrorLogRecordModel } from 'src/logging/domain/models/error-log-record.entity';
import { IAggregateModelMapper } from '../../../common/mapper/aggregate-model.mapper';
import { ISchemaMapper } from '../../../common/mapper/schema.mapper';
import { ErrorLogRecord } from '../schemas/error-log-record.schema';

export class MapErrorLogRecordFactory
  implements
    ISchemaMapper<ErrorLogRecord, ErrorLogRecordModel>,
    IAggregateModelMapper<ErrorLogRecord, ErrorLogRecordModel>
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
      createdBy: null,
      updatedBy: null,
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
      entitySchema.createdAt,
      entitySchema.updatedAt,
      entitySchema.createdBy,
      entitySchema.updatedBy,
    );
  }
}
