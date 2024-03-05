import { Prop, Schema } from '@nestjs/mongoose';
import { CustomerType } from 'src/kyc/core/enum/customer-type.enum';
import { Relationship } from 'src/kyc/core/enum/relationship.enum';
import { HumanCustomerSchema } from './human-customer.schema';

@Schema()
export class NomineeSchema extends HumanCustomerSchema {
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
