import { BloodGroup } from 'src/common/enums/blood-group.enum';
import { Gender } from 'src/common/enums/gender.enum';
import { MaritalStatus } from 'src/common/enums/marital-status.enum';
import { Relationship } from 'src/common/enums/relationship.enum';
import { Religion } from 'src/common/enums/religion.enum';
import { FamilyTreeStatus } from 'src/kyc/domain/enums/family-tree-status.enum';

export class FamilyAndRelativeResponse {
  familyTreeId: string;
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
  photo: string;
  relationship: Relationship;
  status: FamilyTreeStatus;
}
