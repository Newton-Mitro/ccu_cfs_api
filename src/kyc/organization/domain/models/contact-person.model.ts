import { BloodGroup } from '../../../../common/domain/enums/blood-group.enum';
import { Gender } from '../../../../common/domain/enums/gender.enum';
import { MaritalStatus } from '../../../../common/domain/enums/marital-status.enum';
import { Profession } from '../../../../common/domain/enums/profession.enum';
import { Religion } from '../../../../common/domain/enums/religion.enum';
import { AuthUserType } from '../../../../common/domain/types/auth-user.type';
import { ContactPersonProps } from '../types/contact-person-props';

export class ContactPersonModel {
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
  readonly createdBy: AuthUserType | null;
  readonly updatedBy: AuthUserType | null;
  readonly contactPersonId: string;

  constructor(contactPersonProps: ContactPersonProps) {
    this.contactPersonId = contactPersonProps.contactPersonId;
    this.personId = contactPersonProps.personId;
    this.identificationNumber = contactPersonProps.identificationNumber;
    this.nameEn = contactPersonProps.nameEn;
    this.nameBn = contactPersonProps.nameBn;
    this.contactNumber = contactPersonProps.contactNumber;
    this.mobileNumber = contactPersonProps.mobileNumber;
    this.phoneNumber = contactPersonProps.phoneNumber;
    this.email = contactPersonProps.email;
    this.dateOfBirth = contactPersonProps.dateOfBirth;
    this.gender = contactPersonProps.gender;
    this.bloodGroup = contactPersonProps.bloodGroup;
    this.religion = contactPersonProps.religion;
    this.maritalStatus = contactPersonProps.maritalStatus;
    this.profession = contactPersonProps.profession;
    this.nid = contactPersonProps.nid;
    this.birthRegistrationNumber = contactPersonProps.birthRegistrationNumber;
    this.photo = contactPersonProps.photo;
    this.createdAt = contactPersonProps.createdAt;
    this.updatedAt = contactPersonProps.updatedAt;
    this.createdBy = contactPersonProps.createdBy;
    this.updatedBy = contactPersonProps.updatedBy;
  }
}
