import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  versionKey: false,
  collection: 'Logs',
  discriminatorKey: 'LogType',
})
export class BaseLogRecord {
  @Prop({ type: Object })
  User: Object;

  @Prop()
  UserAgent: string;

  @Prop({ type: String })
  ReceivedAt: string;

  @Prop()
  IP: string;

  @Prop()
  RequestMethod: string;

  @Prop()
  Path: string;

  @Prop({ type: Object })
  RequestQuery: Object;

  @Prop({ type: Object })
  RequestBody: Object;

  @Prop({ type: Number })
  StatusCode: number;
}

export type BaseLogRecordDocument = BaseLogRecord & Document;
export const BASE_LOG_RECORD_MODEL = BaseLogRecord.name;

export const BaseLogRecordSchema = SchemaFactory.createForClass(BaseLogRecord);
