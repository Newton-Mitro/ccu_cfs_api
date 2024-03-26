import { Types } from 'mongoose';
import { IBusinessModelMapper } from 'src/config/database/mongoose/business-model.mapper';
import { ISchemaMapper } from 'src/config/database/mongoose/schema.mapper';
import { ErrorLogRecordModel } from 'src/logging/domain/models/error-log-record.entity';
import { ErrorLogRecord } from '../schemas/error-log-record.schema';

export class MapErrorLogRecordFactory
  implements
    ISchemaMapper<ErrorLogRecord, ErrorLogRecordModel>,
    IBusinessModelMapper<ErrorLogRecord, ErrorLogRecordModel>
{
  mapBusinessModelToSchema(entity: ErrorLogRecordModel): ErrorLogRecord {
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
      CreatedAt: new Date(),
      UpdatedAt: new Date(),
      CreatedBy: '',
      UpdatedBy: '',
    };
  }

  mapSchemaToBusinessModel(entitySchema: ErrorLogRecord): ErrorLogRecordModel {
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
