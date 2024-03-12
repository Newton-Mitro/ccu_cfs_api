import { Prop, Schema } from '@nestjs/mongoose';
import { BaseLogRecordSchema } from './base-log-record.schema';

@Schema()
export class SuccessLogRecordSchema extends BaseLogRecordSchema {
  @Prop({ type: String })
  RequestedAt: string;

  @Prop({ type: Number })
  ResponseTime: number;
}

export type SuccessLogRecordDocument = SuccessLogRecordSchema & Document;
export const SUCCESS_LOG_RECORD_MODEL = SuccessLogRecordSchema.name;
