import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseLogRecord } from './base-log-record.schema';

@Schema()
export class ErrorLogRecord extends BaseLogRecord {
  @Prop()
  exceptionType: string;

  @Prop({ type: Object })
  errorMessage: any;
}
export const ErrorLogRecordSchema =
  SchemaFactory.createForClass(ErrorLogRecord);
export type ErrorLogRecordDocument = ErrorLogRecord & Document;

export const ERROR_LOG_RECORD_MODEL = 'ErrorLog';
