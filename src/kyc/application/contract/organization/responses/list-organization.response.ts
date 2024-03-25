import { OrganizationAttachment } from './organization-attachment';

export class ListOrganizationResponse {
  organizationId: string;
  identificationNumber: string;
  registrationNumber: string;
  nameEn: string;
  nameBn: string;
  tin: string;
  contactNumber: string;
  mobileNumber: string;
  phoneNumber: string;
  fax: string;
  email: string;
  website: string;
  logo: OrganizationAttachment;
}
