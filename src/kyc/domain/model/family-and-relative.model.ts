import { BloodGroup } from '../enum/blood-group.enum';
import { Gender } from '../enum/gender.enum';
import { MaritalStatus } from '../enum/marital-status.enum';
import { Profession } from '../enum/profession.enum';
import { Religion } from '../enum/religion.enum';
import { AddressModel } from './address.model';

export class FamilyAndRelativeModel {
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
