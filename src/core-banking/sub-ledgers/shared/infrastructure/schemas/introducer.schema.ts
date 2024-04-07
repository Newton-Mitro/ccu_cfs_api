import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HumanCustomer } from './human-customer.schema';

@Schema()
export class Introducer extends HumanCustomer {
  constructor() {
    super();
  }

  @Prop()
  introducerId: string;
}

export type IntroducerDocument = Introducer & Document;
export const INTRODUCER_MODEL = Introducer.name;
export const IntroducerSchema = SchemaFactory.createForClass(Introducer);
