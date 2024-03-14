import { OrganizationAttachmentResponse } from './organization-attachment.response';

export class ListOrganizationResponse {
  // @Expose({ name: 'organization_id' })
  OrganizationId: string;

  // @Expose({ name: 'identification_number' })
  IdentificationNumber: string;

  // @Expose({ name: 'registration_number' })
  RegistrationNumber: string;

  // @Expose({ name: 'name_en' })
  NameEn: string;

  // @Expose({ name: 'name_bn' })
  NameBn: string;

  // @Expose({ name: 'tin' })
  TIN: string;

  // @Expose({ name: 'contact_number' })
  ContactNumber: string;

  // @Expose({ name: 'mobile_number' })
  MobileNumber: string;

  // @Expose({ name: 'phone_number' })
  PhoneNumber: string;

  // @Expose({ name: 'fax_number' })
  Fax: string;

  // @Expose({ name: 'email' })
  Email: string;

  // @Expose({ name: 'website' })
  Website: string;

  // @Expose({ name: 'logo' })
  Logo: OrganizationAttachmentResponse;
}
