import { Types } from 'mongoose';
import { EntitySchemaFactory } from 'src/common/mongoose/entity-schema.factory';
import { ErrorLogRecordModel } from 'src/logging/domain/entities/error-log-record.entity';
import { ErrorLogRecordSchema } from '../schemas/error-log-record.schema';

export class MapErrorLogRecordFactory
  implements EntitySchemaFactory<ErrorLogRecordSchema, ErrorLogRecordModel>
{
  create(entity: ErrorLogRecordModel): ErrorLogRecordSchema {
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

  createFromSchema(entitySchema: ErrorLogRecordSchema): ErrorLogRecordModel {
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
