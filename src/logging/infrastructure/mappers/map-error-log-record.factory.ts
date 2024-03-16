import { Types } from 'mongoose';
import { ErrorLogRecordModel } from 'src/logging/domain/models/error-log-record.entity';
import { ErrorLogRecord } from '../schemas/error-log-record.schema';
import { EntitySchemaFactory } from 'src/config/database/mongoose/entity-schema.factory';

export class MapErrorLogRecordFactory
  implements EntitySchemaFactory<ErrorLogRecord, ErrorLogRecordModel>
{
  create(entity: ErrorLogRecordModel): ErrorLogRecord {
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
    };
  }

  createFromSchema(entitySchema: ErrorLogRecord): ErrorLogRecordModel {
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
