import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { CustomerType } from '../../../../../common/domain/enums/customer-type.enum';
import { IdentifiableEntitySchema } from '../../../../../common/infrastructure/schemas/identifiable-entity.schema';

@Schema()
export class BaseCustomer extends IdentifiableEntitySchema {
  @Prop({ require: true, trim: true })
  identificationNumber: string;

  @Prop({ require: true, trim: true })
  nameEn: string;

  @Prop({ trim: true })
  nameBn: string;

  @Prop({ trim: true })
  email: string;

  @Prop({ trim: true })
  contactNumber: string;

  @Prop({ trim: true })
  mobileNumber: string;

  @Prop({ trim: true })
  phoneNumber: string;

  @Prop({
    type: String,
    enum: Object.values(CustomerType),
    default: CustomerType.PERSON,
  })
  customerType: CustomerType;
}

export type BaseCustomerDocument = BaseCustomer & Document;
export const BASE_CUSTOMER_MODEL = BaseCustomer.name;
export const BaseCustomerSchema = SchemaFactory.createForClass(BaseCustomer);
