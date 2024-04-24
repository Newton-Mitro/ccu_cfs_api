import { BloodGroup } from '../../../../../common/domain/enums/blood-group.enum';
import { Gender } from '../../../../../common/domain/enums/gender.enum';
import { MaritalStatus } from '../../../../../common/domain/enums/marital-status.enum';
import { Profession } from '../../../../../common/domain/enums/profession.enum';
import { Religion } from '../../../../../common/domain/enums/religion.enum';
import { AuthUserType } from '../../../../../common/domain/types/auth-user.type';

export class AddPersonCommand {
  constructor(
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
    public readonly profession: Profession,
    public readonly photo: PersonPhotoAttachment,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
    public readonly createdBy: AuthUserType | null,
    public readonly updatedBy: AuthUserType | null,
  ) {}
}

export class PersonPhotoAttachment {
  constructor(
    public readonly base64Document: string,
    public readonly fileExtension: string,
    public readonly documentTitle: string = 'Photo',
  ) {}
}
