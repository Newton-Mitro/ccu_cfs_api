import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { BloodGroup } from 'src/kyc/domain/enum/blood-group.enum';
import { Gender } from 'src/kyc/domain/enum/gender.enum';
import { MaritalStatus } from 'src/kyc/domain/enum/marital-status.enum';
import { Profession } from 'src/kyc/domain/enum/profession.enum';
import { Religion } from 'src/kyc/domain/enum/religion.enum';
import { AddressModel } from 'src/kyc/domain/model/address.model';

@Schema()
export class FamilyAndRelative {
  IdentificationNumber: string;
  NameEn: string;
  NameBn: string;
  Email: string;
  ContactNumber: string;
  DateOfBirth: Date;
  Nid: string;
  BirthRegistrationNumber: string;
  BloodGroup: BloodGroup;
  Gender: Gender;
  Religion: Religion;
  Profession: Profession;
  MaritalStatus: MaritalStatus;
  Alive: boolean;
  Photo: string;
  Addresses: AddressModel[];
}

export const FamilyAndRelativeSchema =
  SchemaFactory.createForClass(FamilyAndRelative);
