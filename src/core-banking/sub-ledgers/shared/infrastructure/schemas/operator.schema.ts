import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HumanCustomer } from './human-customer.schema';

@Schema()
export class Operator extends HumanCustomer {
  constructor() {
    super();
  }
  @Prop()
  operatorId: string;
}

export type OperatorDocument = Operator & Document;
export const OPERATOR_MODEL = Operator.name;
export const OperatorSchema = SchemaFactory.createForClass(Operator);
