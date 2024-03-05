import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { CustomerType } from 'src/kyc/domain/enum/customer-type.enum';
import { Relationship } from 'src/kyc/domain/enum/relationship.enum';
import { HumanCustomer } from './human-customer.schema';

@Schema()
export class Nominee extends HumanCustomer {
  constructor() {
    super();
  }

  @Prop({
    type: String,
    enum: Object.values(CustomerType),
    default: CustomerType.Person,
  })
  Relationship: Relationship;

  @Prop({ type: Number })
  Percent: number;
}

export type NomineeDocument = Nominee & Document;
export const NOMINEE_MODEL = Nominee.name;
export const NomineeSchema = SchemaFactory.createForClass(Nominee);
