import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Country } from 'src/common/enums/country.enum';
import { IdentifiableEntitySchema } from 'src/config/database/mongoose/identifiable-entity.schema';
import { AddressType } from 'src/kyc/domain/enums/person-address-type.enum';

@Schema()
export class Address extends IdentifiableEntitySchema {
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

  @Prop({
    type: String,
    enum: Object.values(Country),
    default: Country.BANGLADESH,
  })
  Country: Country;

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
