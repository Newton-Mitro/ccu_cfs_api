import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Address, AddressSchema } from './address.schema';
import { KycAttachment, KycAttachmentSchema } from './kyc-attachment.schema';

@Schema({
  timestamps: true,
  versionKey: false,
  discriminatorKey: 'customerType',
})
export class Customer {
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

  @Prop()
  nameBn: string;

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
  email: string;

  @Prop()
  contactNumber: string;

  @Prop({
    type: Array(AddressSchema),
  })
  addresses: Address[];

  @Prop({ type: Array(KycAttachmentSchema) })
  attachments: KycAttachment[];
}

export type CustomerDocument = Customer & Document;
export const CUSTOMER_MODEL = Customer.name;

export const CustomerSchema = SchemaFactory.createForClass(Customer);
