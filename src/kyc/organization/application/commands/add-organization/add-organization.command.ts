import { AuthUserType } from '../../../../../common/domain/types/auth-user.type';

export class AddOrganizationCommand {
  constructor(
    public readonly registrationNumber: string,
    public readonly tin: string,
    public readonly nameEn: string,
    public readonly nameBn: string,
    public readonly email: string,
    public readonly contactNumber: string,
    public readonly mobileNumber: string,
    public readonly phoneNumber: string,
    public readonly fax: string,
    public readonly website: string,
    public readonly logo: OrganizationPhotoAttachment,
    public readonly createdAt: Date,
    public readonly updatedAt: Date,
    public readonly createdBy: AuthUserType,
    public readonly updatedBy: AuthUserType,
  ) {}
}

export class OrganizationPhotoAttachment {
  constructor(
    public readonly base64Document: string,
    public readonly fileExtension: string,
    public readonly documentTitle: string = 'Logo',
  ) {}
}
