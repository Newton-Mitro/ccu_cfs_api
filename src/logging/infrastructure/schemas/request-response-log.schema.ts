import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class RequestResponseLog {
  @Prop()
  UserAgent: string;

  @Prop()
  RequestedAt: string;

  @Prop()
  IP: string;

  @Prop()
  RequestMethod: string;

  @Prop()
  Path: string;

  @Prop()
  RequestQuery: any;

  @Prop()
  RequestBody: any;

  @Prop()
  ExceptionType: string;

  @Prop()
  Response: any;

  @Prop()
  ResponseTime: string;

  @Prop()
  Status: any;
}

export type RequestResponseLogDocument = RequestResponseLog & Document;
export const REQUEST_RESPONSE_LOG_MODEL = RequestResponseLog.name;

export const RequestResponseLogSchema =
  SchemaFactory.createForClass(RequestResponseLog);
