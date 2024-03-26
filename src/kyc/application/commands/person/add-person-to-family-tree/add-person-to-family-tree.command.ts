import { BloodGroup } from 'src/common/enums/blood-group.enum';
import { Gender } from 'src/common/enums/gender.enum';
import { MaritalStatus } from 'src/common/enums/marital-status.enum';
import { Relationship } from 'src/common/enums/relationship.enum';
import { Religion } from 'src/common/enums/religion.enum';
import { FamilyTreeStatus } from 'src/kyc/domain/enums/family-tree-status.enum';
import { PersonPhotoAttachment } from '../create-person/create-person.command';

export class AddPersonToFamilyTreeCommand {
  constructor(
    public readonly customerId: string,
    public readonly identificationNumber: string,
    public readonly nameEn: string,
    public readonly nameBn: string,
    public readonly dateOfBirth: Date,
    public readonly gender: Gender,
    public readonly bloodGroup: BloodGroup,
    public readonly religion: Religion,
    public readonly nid: string,
    public readonly birthRegistrationNumber: string,
    public readonly maritalStatus: MaritalStatus,
    public readonly contactNumber: string,
    public readonly mobileNumber: string,
    public readonly phoneNumber: string,
    public readonly email: string,
    public readonly photo: PersonPhotoAttachment,
    public readonly relationship: Relationship,
    public readonly status: FamilyTreeStatus,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
    public readonly createdBy: string,
    public readonly updatedBy: string,
  ) {}
}
