import { BloodGroup } from '../enum/blood-group.enum';
import { Gender } from '../enum/gender.enum';
import { MaritalStatus } from '../enum/marital-status.enum';
import { Profession } from '../enum/profession.enum';
import { Religion } from '../enum/religion.enum';
import { AddressModel } from './address.model';

export class FamilyAndRelativeModel {
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
