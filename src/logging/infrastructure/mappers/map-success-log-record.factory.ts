import { Types } from 'mongoose';
import { SuccessLogRecordModel } from 'src/logging/domain/models/success-log-record.entity';
import { IAggregateModelMapper } from '../../../common/mapper/aggregate-model.mapper';
import { ISchemaMapper } from '../../../common/mapper/schema.mapper';
import { SuccessLogRecord } from '../schemas/success-log-record.schema';

export class MapSuccessLogRecordFactory
  implements
    ISchemaMapper<SuccessLogRecord, SuccessLogRecordModel>,
    IAggregateModelMapper<SuccessLogRecord, SuccessLogRecordModel>
{
  mapAggregateToSchema(entity: SuccessLogRecordModel): SuccessLogRecord {
    return {
      _id: new Types.ObjectId(),
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
      requestedAt: entity.requestedAt,
      responseTime: entity.responseTime,
      createdAt: new Date(),
      updatedAt: new Date(),
      createdBy: '',
      updatedBy: '',
    };
  }

  mapSchemaToAggregate(entitySchema: SuccessLogRecord): SuccessLogRecordModel {
    return new SuccessLogRecordModel(
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
      entitySchema.requestedAt,
      entitySchema.responseTime,
    );
  }
}
