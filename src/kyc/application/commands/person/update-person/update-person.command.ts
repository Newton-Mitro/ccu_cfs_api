import { BloodGroup } from 'src/common/enums/blood-group.enum';
import { Gender } from 'src/common/enums/gender.enum';
import { MaritalStatus } from 'src/common/enums/marital-status.enum';
import { Profession } from 'src/common/enums/profession.enum';
import { Religion } from 'src/common/enums/religion.enum';

export class UpdatePersonCommand {
  constructor(
    public readonly personId: string,
    public readonly nameEn: string,
    public readonly nameBn: string,
    public readonly dateOfBirth: Date,
    public readonly gender: Gender,
    public readonly bloodGroup: BloodGroup,
    public readonly religion: Religion,
    public readonly maritalStatus: MaritalStatus,
    public readonly contactNumber: string,
    public readonly phoneNumber: string,
    public readonly profession: Profession,
    public readonly photo: PersonPhotoAttachment,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
    public readonly createdBy: string,
    public readonly updatedBy: string,
  ) {}
}

export class PersonPhotoAttachment {
  constructor(
    public readonly base64Document: string,
    public readonly fileExtension: string,
    public readonly documentTitle: string = 'Photo',
  ) {}
}
