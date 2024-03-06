import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AddressType } from 'src/kyc/domain/enum/address-type.enum';

@Schema()
export class Address {
  @Prop({
    type: String,
    enum: Object.values(AddressType),
    default: AddressType.Permanent_Address,
  })
  AddressType: AddressType;

  @Prop({ require: true })
  AddressLineOne: string;

  @Prop()
  AddressLineTwo: string;

  @Prop({ require: true })
  Country: string;

  @Prop()
  State: string;

  @Prop()
  City: string;

  @Prop()
  Division: string;

  @Prop()
  District: string;

  @Prop()
  SubDistrict: string;

  @Prop()
  ZipCode: string;
}

export const AddressSchema = SchemaFactory.createForClass(Address);
