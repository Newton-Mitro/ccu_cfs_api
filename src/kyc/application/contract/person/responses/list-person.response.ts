import { BloodGroup } from 'src/common/enums/blood-group.enum';
import { Gender } from 'src/common/enums/gender.enum';
import { MaritalStatus } from 'src/common/enums/marital-status.enum';
import { Profession } from 'src/common/enums/profession.enum';
import { Religion } from 'src/common/enums/religion.enum';

export class ListPersonResponse {
  personId: string;
  identificationNumber: string;
  nameEn: string;
  nameBn: string;
  dateOfBirth: Date;
  gender: Gender;
  bloodGroup: BloodGroup;
  religion: Religion;
  nid: string;
  birthRegistrationNumber: string;
  maritalStatus: MaritalStatus;
  contactNumber: string;
  mobileNumber: string;
  phoneNumber: string;
  email: string;
  profession: Profession;
  photo: string;
}
