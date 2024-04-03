import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BaseLogRecord } from './base-log-record.schema';

@Schema()
export class SuccessLogRecord extends BaseLogRecord {
  @Prop({ type: String })
  requestedAt: string;

  @Prop({ type: Number })
  responseTime: number;
}
export const SuccessLogRecordSchema =
  SchemaFactory.createForClass(SuccessLogRecord);
export type SuccessLogRecordDocument = SuccessLogRecord & Document;

export const SUCCESS_LOG_RECORD_MODEL = 'SuccessLog';
