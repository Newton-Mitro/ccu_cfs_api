import { Schema } from '@nestjs/mongoose';
import { HumanCustomerSchema } from './human-customer.schema';

@Schema()
export class IntroducerSchema extends HumanCustomerSchema {
  constructor() {
    super();
  }
}
