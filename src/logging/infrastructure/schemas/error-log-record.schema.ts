import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseLogRecord } from './base-log-record.schema';

@Schema()
export class ErrorLogRecord extends BaseLogRecord {
  @Prop({ type: Date })
  RequestedSent: Date;

  @Prop()
  ExceptionType: string;

  @Prop({ type: Object })
  ErrorMessage: any;
}

export type ErrorLogRecordDocument = ErrorLogRecord & Document;
export const ERROR_LOG_RECORD_MODEL = ErrorLogRecord.name;

export const ErrorLogRecordSchema =
  SchemaFactory.createForClass(ErrorLogRecord);
