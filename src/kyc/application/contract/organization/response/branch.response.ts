import { AddOrganizationAttachmentRequest } from '../request/add-organization-attachment.request';

export class BranchResponse {
  branchId: string;
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
  faxNumber: string;
  website: string;
  logo: AddOrganizationAttachmentRequest;
}
