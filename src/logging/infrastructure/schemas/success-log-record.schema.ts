import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseLogRecord } from './base-log-record.schema';

@Schema()
export class SuccessLogRecord extends BaseLogRecord {
  @Prop({ type: String })
  RequestedAt: string;

  @Prop({ type: Number })
  ResponseTime: number;
}

export type SuccessLogRecordDocument = SuccessLogRecord & Document;
export const SUCCESS_LOG_RECORD_MODEL = SuccessLogRecord.name;

export const SuccessLogRecordSchema =
  SchemaFactory.createForClass(SuccessLogRecord);
