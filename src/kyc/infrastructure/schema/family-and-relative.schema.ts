import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BloodGroup } from 'src/common/enums/blood-group.enum';
import { Gender } from 'src/common/enums/gender.enum';
import { MaritalStatus } from 'src/common/enums/marital-status.enum';
import { Profession } from 'src/common/enums/profession.enum';
import { Religion } from 'src/common/enums/religion.enum';
import { AddressEntity } from 'src/kyc/domain/common/entities/address.entity';

@Schema()
export class FamilyAndRelative {
  @Prop()
  IdentificationNumber: string;
  @Prop()
  NameEn: string;
  @Prop()
  NameBn: string;
  @Prop()
  Email: string;
  @Prop()
  ContactNumber: string;
  @Prop()
  DateOfBirth: Date;
  @Prop()
  NID: string;
  @Prop()
  BirthRegistrationNumber: string;
  @Prop()
  BloodGroup: BloodGroup;
  @Prop()
  Gender: Gender;
  @Prop()
  Religion: Religion;
  @Prop()
  Profession: Profession;
  @Prop()
  MaritalStatus: MaritalStatus;
  @Prop()
  Addresses: AddressEntity[];
}

export const FamilyAndRelativeSchema =
  SchemaFactory.createForClass(FamilyAndRelative);
