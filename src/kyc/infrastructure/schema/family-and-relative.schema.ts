import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { BloodGroup } from 'src/kyc/domain/enum/blood-group.enum';
import { Gender } from 'src/kyc/domain/enum/gender.enum';
import { MaritalStatus } from 'src/kyc/domain/enum/marital-status.enum';
import { Profession } from 'src/kyc/domain/enum/profession.enum';
import { Religion } from 'src/kyc/domain/enum/religion.enum';
import { AddressModel } from 'src/kyc/domain/model/address.model';

@Schema()
export class FamilyAndRelative {
  identificationNumber: string;
  nameEn: string;
  nameBn: string;
  email: string;
  contactNumber: string;
  dateOfBirth: Date;
  nid: string;
  birthRegistrationNumber: string;
  bloodGroup: BloodGroup;
  gender: Gender;
  religion: Religion;
  profession: Profession;
  maritalStatus: MaritalStatus;
  alive: boolean;
  photo: string;
  addresses: AddressModel[];
}

export const FamilyAndRelativeSchema =
  SchemaFactory.createForClass(FamilyAndRelative);
