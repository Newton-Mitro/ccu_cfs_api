import { StorageDocumentModel } from 'src/storage/domain/model/storage-document.model';
import { AddressModel } from './address.model';

export class CustomerModel {
  identificationNumber: string;
  nameEn: string;
  nameBn: string;
  email: string;
  contactNumber: string;
  addresses: AddressModel[];
  attachments: StorageDocumentModel[];
}
