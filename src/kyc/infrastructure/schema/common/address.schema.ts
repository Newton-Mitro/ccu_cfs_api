import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { PersonAddressType } from 'src/kyc/domain/common/enums/person-address-type.enum';

@Schema()
export class Address {
  @Prop({
    type: String,
    enum: Object.values(PersonAddressType),
    default: PersonAddressType.PERMANENT_ADDRESS,
  })
  AddressType: PersonAddressType;

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
