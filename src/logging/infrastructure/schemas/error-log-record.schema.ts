import { Prop, Schema } from '@nestjs/mongoose';
import { BaseLogRecordSchema } from './base-log-record.schema';

@Schema()
export class ErrorLogRecordSchema extends BaseLogRecordSchema {
  @Prop()
  ExceptionType: string;

  @Prop({ type: Object })
  ErrorMessage: any;
}

export type ErrorLogRecordDocument = ErrorLogRecordSchema & Document;
