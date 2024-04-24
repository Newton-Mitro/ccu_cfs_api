import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IdentifiableEntitySchema } from '../../../../common/infrastructure/schemas/identifiable-entity.schema';
import { Address, AddressSchema } from './address.schema';

@Schema({
  discriminatorKey: 'customerType',
  collection: 'customers',
  versionKey: false,
})
export class Customer extends IdentifiableEntitySchema {
  @Prop({
    require: true,
    unique: true,
    minLength: 6,
    maxLength: 13,
    trim: true,
  })
  identificationNumber: string;

  @Prop({ require: true, trim: true })
  nameEn: string;

  @Prop({ default: null })
  nameBn: string;

  @Prop({ trim: true })
  email: string;

  @Prop()
  contactNumber: string;

  @Prop()
  phoneNumber: string;

  @Prop()
  mobileNumber: string;

  // @Prop()
  // customerType: string;

  @Prop({
    type: Array(AddressSchema),
  })
  addresses: Address[];
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);

export type CustomerDocument = Customer & Document;
// export type CustomerDocument = HydratedDocument<Customer>;
export const CUSTOMER_MODEL = Customer.name;
