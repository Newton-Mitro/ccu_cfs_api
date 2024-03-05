import { Prop, Schema } from '@nestjs/mongoose';
import { CustomerType } from 'src/kyc/core/enum/customer-type.enum';

@Schema()
export class BaseCustomerSchema {
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
    default: CustomerType.Person,
  })
  CustomerType: CustomerType;
}
