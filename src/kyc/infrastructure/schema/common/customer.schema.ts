import { Prop, Schema } from '@nestjs/mongoose';
import { IdentifiableEntitySchema } from 'src/common/mongoose/identifiable-entity.schema';
import { AddressSchema } from './address.schema';

@Schema({
  timestamps: true,
  versionKey: false,
  discriminatorKey: 'CustomerType',
  collection: 'Customers',
})
export class CustomerSchema extends IdentifiableEntitySchema {
  @Prop({
    require: true,
    unique: true,
    minLength: 6,
    maxLength: 13,
    trim: true,
  })
  IdentificationNumber: string;

  @Prop({ require: true, trim: true })
  NameEn: string;

  @Prop()
  NameBn: string;

  @Prop({
    trim: true,
    validate: {
      validator: (Email) => {
        if (Email !== '') {
          return /[a-z0-9._%+-]+@[a-z0-9.-]+([.]{1})+[a-z]{2,}$/.test(Email);
        } else {
          return true;
        }
      },
      message: (props) => `${props.value} is not a valid email address!`,
    },
  })
  Email: string;

  @Prop()
  ContactNumber: string;

  @Prop()
  PhoneNumber: string;

  @Prop()
  MobileNumber: string;

  @Prop({
    type: Array(),
  })
  Addresses: AddressSchema[];
}

export type CustomerDocument = CustomerSchema & Document;
export const CUSTOMER_MODEL = CustomerSchema.name;
