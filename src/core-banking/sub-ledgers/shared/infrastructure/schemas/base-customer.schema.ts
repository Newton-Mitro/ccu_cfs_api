import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { CustomerType } from 'src/common/enums/customer-type.enum';

@Schema()
export class BaseCustomer {
  @Prop({ require: true, trim: true })
  IdentificationNumber: string;

  @Prop({ require: true, trim: true })
  NameEn: string;

  @Prop({ trim: true })
  NameBn: string;

  @Prop({ trim: true })
  Email: string;

  @Prop({ trim: true })
  ContactNumber: string;

  @Prop({ trim: true })
  SavingAccountNumber: string;

  @Prop({
    type: String,
    enum: Object.values(CustomerType),
    default: CustomerType.PERSON,
  })
  CustomerType: CustomerType;
}

export type BaseCustomerDocument = BaseCustomer & Document;
export const BASE_CUSTOMER_MODEL = BaseCustomer.name;
export const BaseCustomerSchema = SchemaFactory.createForClass(BaseCustomer);
