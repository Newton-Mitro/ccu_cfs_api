export type OrganizationProps = {
  organizationId: string;
  identificationNumber: string;
  registrationNumber: string;
  tin: string;
  nameEn: string;
  nameBn: string;
  email: string;
  contactNumber: string;
  mobileNumber: string;
  phoneNumber: string;
  fax: string;
  website: string;
  logo: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;
};

export class OrganizationModel {
  readonly organizationId: string;
  readonly identificationNumber: string;
  readonly registrationNumber: string;
  readonly tin: string;
  readonly nameEn: string;
  readonly nameBn: string;
  readonly email: string;
  readonly contactNumber: string;
  readonly mobileNumber: string;
  readonly phoneNumber: string;
  readonly fax: string;
  readonly website: string;
  readonly logo: string;
  readonly createdAt: Date;
  readonly updatedAt: Date;
  readonly createdBy: string;
  readonly updatedBy: string;

  constructor(organizationProps: OrganizationProps) {
    this.organizationId = organizationProps.organizationId;
    this.identificationNumber = organizationProps.identificationNumber;
    this.registrationNumber = organizationProps.registrationNumber;
    this.tin = organizationProps.tin;
    this.nameEn = organizationProps.nameEn;
    this.nameBn = organizationProps.nameBn;
    this.email = organizationProps.email;
    this.contactNumber = organizationProps.contactNumber;
    this.mobileNumber = organizationProps.mobileNumber;
    this.phoneNumber = organizationProps.phoneNumber;
    this.fax = organizationProps.fax;
    this.website = organizationProps.website;
    this.logo = organizationProps.logo;
    this.createdAt = organizationProps.createdAt;
    this.updatedAt = organizationProps.updatedAt;
    this.createdBy = organizationProps.createdBy;
    this.updatedBy = organizationProps.updatedBy;
  }
}
