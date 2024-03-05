import { Schema } from '@nestjs/mongoose';
import { HumanCustomerSchema } from './human-customer.schema';

@Schema()
export class OperatorSchema extends HumanCustomerSchema {
  constructor() {
    super();
  }
}
