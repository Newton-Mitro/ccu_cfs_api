import { Types } from 'mongoose';
import { IBusinessModelMapper } from 'src/common/database/mongoose/business-model.mapper';
import { ISchemaMapper } from 'src/common/database/mongoose/schema.mapper';
import { SuccessLogRecordModel } from 'src/logging/domain/models/success-log-record.entity';
import { SuccessLogRecord } from '../schemas/success-log-record.schema';

export class MapSuccessLogRecordFactory
  implements
    ISchemaMapper<SuccessLogRecord, SuccessLogRecordModel>,
    IBusinessModelMapper<SuccessLogRecord, SuccessLogRecordModel>
{
  mapAggregateToSchema(entity: SuccessLogRecordModel): SuccessLogRecord {
    return {
      _id: new Types.ObjectId(),
      User: entity.User,
      UserAgent: entity.UserAgent,
      ReceivedAt: entity.ReceivedAt,
      IP: entity.IP,
      RequestMethod: entity.RequestMethod,
      Path: entity.Path,
      RequestQuery: entity.RequestQuery,
      RequestBody: entity.RequestBody,
      StatusCode: entity.StatusCode,
      RequestedAt: entity.RequestedAt,
      ResponseTime: entity.ResponseTime,
      createdAt: new Date(),
      updatedAt: new Date(),
      createdBy: '',
      updatedBy: '',
    };
  }

  mapSchemaToAggregate(entitySchema: SuccessLogRecord): SuccessLogRecordModel {
    return new SuccessLogRecordModel(
      entitySchema._id.toHexString(),
      entitySchema.User,
      entitySchema.UserAgent,
      entitySchema.ReceivedAt,
      entitySchema.IP,
      entitySchema.RequestMethod,
      entitySchema.Path,
      entitySchema.RequestQuery,
      entitySchema.RequestBody,
      entitySchema.StatusCode,
      entitySchema.RequestedAt,
      entitySchema.ResponseTime,
    );
  }
}
