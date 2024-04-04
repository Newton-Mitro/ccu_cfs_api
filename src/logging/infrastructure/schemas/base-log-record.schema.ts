import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IdentifiableEntitySchema } from '../../../common/schemas/identifiable-entity.schema';

@Schema({
  versionKey: false,
  collection: 'logs',
  discriminatorKey: 'logType',
})
export class BaseLogRecord extends IdentifiableEntitySchema {
  @Prop({ type: Object })
  user: Object;

  @Prop()
  userAgent: string;

  @Prop({ type: String })
  receivedAt: string;

  @Prop()
  ip: string;

  @Prop()
  method: string;

  @Prop()
  path: string;

  @Prop({ type: Object })
  query: Object;

  @Prop({ type: Object })
  params: Object;

  @Prop({ type: Object })
  body: Object;

  @Prop({ type: Number })
  statusCode: number;
}
export const BaseLogRecordSchema = SchemaFactory.createForClass(BaseLogRecord);
export type BaseLogRecordDocument = BaseLogRecord & Document;
export const BASE_LOG_RECORD_MODEL = BaseLogRecord.name;
