import { IsEnum } from 'class-validator';
import { BloodGroup } from 'src/common/enums/blood-group.enum';
import { Gender } from 'src/common/enums/gender.enum';
import { MaritalStatus } from 'src/common/enums/marital-status.enum';
import { Relationship } from 'src/common/enums/relationship.enum';
import { Religion } from 'src/common/enums/religion.enum';
import { FamilyTreeStatus } from 'src/kyc/domain/common/enums/family-tree-status.enum';

export class FamilyAndRelativeResponse {
  // @Expose({ name: 'family_tree_id' })
  FamilyTreeId: string;

  // @Expose({ name: 'identification_number' })
  IdentificationNumber: string;

  // @Expose({ name: 'name_en' })
  NameEn: string;

  // @Expose({ name: 'name_bn' })
  NameBn: string;

  // @Expose({ name: 'date_of_birth' })
  DateOfBirth: Date;

  // @Expose({ name: 'gender' })
  Gender: Gender;

  @IsEnum(BloodGroup)
  // @Expose({ name: 'blood_group' })
  BloodGroup: BloodGroup;

  // @Expose({ name: 'religion' })
  Religion: Religion;

  // @Expose({ name: 'nid' })
  NID: string;

  // @Expose({ name: 'birth_registration_number' })
  BirthRegistrationNumber: string;

  // @Expose({ name: 'marital_status' })
  MaritalStatus: MaritalStatus;

  // @Expose({ name: 'contact_number' })
  ContactNumber: string;

  // @Expose({ name: 'mobile_number' })
  MobileNumber: string;

  // @Expose({ name: 'phone_number' })
  PhoneNumber: string;

  // @Expose({ name: 'email' })
  Email: string;

  // @Expose({ name: 'photo' })
  Photo: string;

  // @Expose({ name: 'relationship' })
  Relationship: Relationship;

  // @Expose({ name: 'status' })
  Status: FamilyTreeStatus;
}
