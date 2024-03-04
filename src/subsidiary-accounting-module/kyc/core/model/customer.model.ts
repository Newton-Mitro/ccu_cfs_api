import { AddressModel } from './address.model';
import { KycAttachmentModel } from './kyc-attachment.model';

export class CustomerModel {
  identificationNumber: string;
  nameEn: string;
  nameBn: string;
  registeredEmail: string;
  alternateEmail: string;
  registeredMobile: string;
  alternateContactNumber: string;
  emergencyContactNumber: string;
  addresses: AddressModel[];
  attachments: KycAttachmentModel[];
}
