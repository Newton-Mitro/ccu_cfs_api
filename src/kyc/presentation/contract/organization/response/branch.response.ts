import { AddOrganizationAttachmentRequest } from '../request/add-organization-attachment.request';

export class BranchResponse {
  BranchId: string;
  OrganizationId: string;
  IdentificationNumber: string;
  RegistrationNumber: string;
  NameEn: string;
  NameBn: string;
  Email: string;
  ContactNumber: string;
  MobileNumber: string;
  PhoneNumber: string;
  FaxNumber: string;
  Website: string;
  Logo: AddOrganizationAttachmentRequest;
}
