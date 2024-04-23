import { Relationship } from 'src/common/enums/relationship.enum';
import { BloodGroup } from '../../../../common/enums/blood-group.enum';
import { Gender } from '../../../../common/enums/gender.enum';
import { MaritalStatus } from '../../../../common/enums/marital-status.enum';
import { Profession } from '../../../../common/enums/profession.enum';
import { Religion } from '../../../../common/enums/religion.enum';
import { AuthUserType } from '../../../../common/types/auth-user.type';
import { FamilyTreeStatus } from '../enums/family-tree-status.enum';
import { FamilyAndRelativeProps } from '../types/family-and-relative-props';

export class FamilyAndRelativeModel {
  readonly familyTreeId: string;
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
  readonly relationship: Relationship;
  readonly status: FamilyTreeStatus;

  constructor(familyAndRelativeProps: FamilyAndRelativeProps) {
    this.familyTreeId = familyAndRelativeProps.familyTreeId;
    this.personId = familyAndRelativeProps.personId;
    this.identificationNumber = familyAndRelativeProps.identificationNumber;
    this.nameEn = familyAndRelativeProps.nameEn;
    this.nameBn = familyAndRelativeProps.nameBn;
    this.contactNumber = familyAndRelativeProps.contactNumber;
    this.mobileNumber = familyAndRelativeProps.mobileNumber;
    this.phoneNumber = familyAndRelativeProps.phoneNumber;
    this.email = familyAndRelativeProps.email;
    this.dateOfBirth = familyAndRelativeProps.dateOfBirth;
    this.gender = familyAndRelativeProps.gender;
    this.bloodGroup = familyAndRelativeProps.bloodGroup;
    this.religion = familyAndRelativeProps.religion;
    this.maritalStatus = familyAndRelativeProps.maritalStatus;
    this.profession = familyAndRelativeProps.profession;
    this.nid = familyAndRelativeProps.nid;
    this.birthRegistrationNumber =
      familyAndRelativeProps.birthRegistrationNumber;
    this.photo = familyAndRelativeProps.photo;
    this.createdAt = familyAndRelativeProps.createdAt;
    this.updatedAt = familyAndRelativeProps.updatedAt;
    this.createdBy = familyAndRelativeProps.createdBy;
    this.updatedBy = familyAndRelativeProps.updatedBy;
    this.relationship = familyAndRelativeProps.relationship;
    this.status = familyAndRelativeProps.status;
  }
}
