import { BloodGroup } from '../../../../../common/domain/enums/blood-group.enum';
import { Gender } from '../../../../../common/domain/enums/gender.enum';
import { MaritalStatus } from '../../../../../common/domain/enums/marital-status.enum';
import { Profession } from '../../../../../common/domain/enums/profession.enum';
import { Religion } from '../../../../../common/domain/enums/religion.enum';

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
    public readonly updatedAt: Date,
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
