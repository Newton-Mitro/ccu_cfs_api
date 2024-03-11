import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({
  versionKey: false,
  collection: 'request_response_logs',
})
export class RequestResponseLog {
  @Prop({ type: Object })
  User: Object;

  @Prop()
  UserAgent: string;

  @Prop({ type: Date })
  RequestedSent: Date;

  @Prop({ type: Date })
  RequestedReceived: Date;

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

  @Prop()
  ExceptionType: string;

  @Prop({ type: Number })
  ResponseTime: number;

  @Prop({ type: Number })
  StatusCode: number;

  @Prop({ type: Object })
  ErrorMessage: any;
}

export type RequestResponseLogDocument = RequestResponseLog & Document;
export const REQUEST_RESPONSE_LOG_MODEL = RequestResponseLog.name;

export const RequestResponseLogSchema =
  SchemaFactory.createForClass(RequestResponseLog);
