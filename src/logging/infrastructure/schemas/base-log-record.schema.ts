import { Prop, Schema } from '@nestjs/mongoose';
import { IdentifiableEntitySchema } from 'src/common/mongoose/identifiable-entity.schema';

@Schema({
  versionKey: false,
  collection: 'Logs',
  discriminatorKey: 'LogType',
})
export class BaseLogRecordSchema extends IdentifiableEntitySchema {
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

export type BaseLogRecordDocument = BaseLogRecordSchema & Document;
export const BASE_LOG_RECORD_MODEL = BaseLogRecordSchema.name;
