import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { CustomerType } from 'src/common/enums/customer-type.enum';
import { Relationship } from 'src/common/enums/relationship.enum';
import { HumanCustomer } from './human-customer.schema';

@Schema()
export class Nominee extends HumanCustomer {
  constructor() {
    super();
  }

  @Prop()
  nomineeId: string;

  @Prop({
    type: String,
    enum: Object.values(CustomerType),
    default: CustomerType.PERSON,
  })
  relationship: Relationship;

  @Prop({ type: Number })
  percent: number;
}

export type NomineeDocument = Nominee & Document;
export const NOMINEE_MODEL = Nominee.name;
export const NomineeSchema = SchemaFactory.createForClass(Nominee);
