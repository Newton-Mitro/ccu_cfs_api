import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HumanCustomer } from './human-customer.schema';

@Schema()
export class HumanAccountHolder extends HumanCustomer {
  constructor() {
    super();
  }

  @Prop()
  accountHolderId: string;
}

export type HumanAccountHolderDocument = HumanAccountHolder & Document;
export const HUMAN_ACCOUNT_HOLDER_MODEL = HumanAccountHolder.name;
export const HumanAccountHolderSchema =
  SchemaFactory.createForClass(HumanAccountHolder);
