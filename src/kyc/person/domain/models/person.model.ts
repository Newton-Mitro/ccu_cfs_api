import { BloodGroup } from 'src/common/enums/blood-group.enum';
import { Gender } from 'src/common/enums/gender.enum';
import { MaritalStatus } from 'src/common/enums/marital-status.enum';
import { Profession } from 'src/common/enums/profession.enum';
import { Religion } from 'src/common/enums/religion.enum';

export type PersonProps = {
  personId: string;
  identificationNumber: string;
  nameEn: string;
  nameBn: string;
  contactNumber: string;
  mobileNumber: string;
  phoneNumber: string;
  email: string;
  dateOfBirth: Date;
  gender: Gender;
  bloodGroup: BloodGroup;
  religion: Religion;
  maritalStatus: MaritalStatus;
  profession: Profession;
  nid: string;
  birthRegistrationNumber: string;
  photo: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;
  customerType: string;
};

export class PersonModel {
  readonly personId: string;
  readonly identificationNumber: string;
  readonly nameEn: string;
  readonly nameBn: string;
  readonly contactNumber: string;
  readonly mobileNumber: string;
  readonly phoneNumber: string;
  readonly email: string;
  readonly dateOfBirth: Date;
  readonly gender: Gender;
  readonly bloodGroup: BloodGroup;
  readonly religion: Religion;
  readonly maritalStatus: MaritalStatus;
  readonly profession: Profession;
  readonly nid: string;
  readonly birthRegistrationNumber: string;
  readonly photo: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly createdBy: string;
  readonly updatedBy: string;

  constructor(personProps: PersonProps) {
    this.personId = personProps.personId;
    this.identificationNumber = personProps.identificationNumber;
    this.nameEn = personProps.nameEn;
    this.nameBn = personProps.nameBn;
    this.contactNumber = personProps.contactNumber;
    this.mobileNumber = personProps.mobileNumber;
    this.phoneNumber = personProps.phoneNumber;
    this.email = personProps.email;
    this.dateOfBirth = personProps.dateOfBirth;
    this.gender = personProps.gender;
    this.bloodGroup = personProps.bloodGroup;
    this.religion = personProps.religion;
    this.maritalStatus = personProps.maritalStatus;
    this.profession = personProps.profession;
    this.nid = personProps.nid;
    this.birthRegistrationNumber = personProps.birthRegistrationNumber;
    this.photo = personProps.photo;
    this.createdAt = personProps.createdAt;
    this.updatedAt = personProps.updatedAt;
    this.createdBy = personProps.createdBy;
    this.updatedBy = personProps.updatedBy;
  }
}
