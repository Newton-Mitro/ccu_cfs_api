export class UpdateOrganizationCommand {
  constructor(
    public readonly organizationId: string,
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
    public readonly updatedAt: Date,
    public readonly updatedBy: string,
  ) {}
}

export class OrganizationPhotoAttachment {
  constructor(
    public readonly base64Document: string,
    public readonly fileExtension: string,
    public readonly documentTitle: string = 'Logo',
  ) {}
}
