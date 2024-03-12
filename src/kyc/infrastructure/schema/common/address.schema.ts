import { Prop, Schema } from '@nestjs/mongoose';
import { AddressType } from 'src/kyc/domain/common/enums/person-address-type.enum';

@Schema()
export class AddressSchema {
  @Prop({
    type: String,
    enum: Object.values(AddressType),
    default: AddressType.PERMANENT_ADDRESS,
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
