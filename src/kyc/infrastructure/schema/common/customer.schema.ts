import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IdentifiableEntitySchema } from 'src/config/database/mongoose/identifiable-entity.schema';
import { Address, AddressSchema } from './address.schema';

@Schema({
  discriminatorKey: 'CustomerType',
  collection: 'Customers',
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
  IdentificationNumber: string;

  @Prop({ require: true, trim: true })
  NameEn: string;

  @Prop()
  NameBn: string;

  @Prop({ trim: true })
  Email: string;

  @Prop()
  ContactNumber: string;

  @Prop()
  PhoneNumber: string;

  @Prop()
  MobileNumber: string;

  @Prop({
    type: Array(AddressSchema),
  })
  Addresses: Address[];

  @Prop()
  CreatedAt: Date;

  @Prop()
  UpdatedAt: Date;

  @Prop()
  CreatedBy: string;

  @Prop()
  UpdatedBy: string;
}

export const CustomerSchema = SchemaFactory.createForClass(Customer);

export type CustomerDocument = Customer & Document;
// export type CustomerDocument = HydratedDocument<Customer>;
export const CUSTOMER_MODEL = Customer.name;
