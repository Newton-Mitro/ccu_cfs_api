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
      User: entity.User,
      UserAgent: entity.UserAgent,
      ReceivedAt: entity.ReceivedAt,
      IP: entity.IP,
      RequestMethod: entity.RequestMethod,
      Path: entity.Path,
      RequestQuery: entity.RequestQuery,
      RequestBody: entity.RequestBody,
      StatusCode: entity.StatusCode,
      ExceptionType: entity.ExceptionType,
      ErrorMessage: entity.ErrorMessage,
      createdAt: new Date(),
      updatedAt: new Date(),
      createdBy: '',
      updatedBy: '',
    };
  }

  mapSchemaToAggregate(entitySchema: ErrorLogRecord): ErrorLogRecordModel {
    return new ErrorLogRecordModel(
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
      entitySchema.ExceptionType,
      entitySchema.ErrorMessage,
    );
  }
}
