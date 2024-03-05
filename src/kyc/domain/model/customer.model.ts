import { StorageDocumentModel } from 'src/storage/domain/model/storage-document.model';
import { AddressModel } from './address.model';

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
  attachments: StorageDocumentModel[];
}
