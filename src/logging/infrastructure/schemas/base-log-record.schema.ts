import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IdentifiableEntitySchema } from 'src/config/database/mongoose/identifiable-entity.schema';

@Schema({
  versionKey: false,
  collection: 'Logs',
  discriminatorKey: 'LogType',
})
export class BaseLogRecord extends IdentifiableEntitySchema {
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
export const BaseLogRecordSchema = SchemaFactory.createForClass(BaseLogRecord);
export type BaseLogRecordDocument = BaseLogRecord & Document;
export const BASE_LOG_RECORD_MODEL = BaseLogRecord.name;
