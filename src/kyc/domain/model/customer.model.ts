import { StorageDocumentModel } from 'src/storage/domain/model/storage-document.model';
import { AddressModel } from './address.model';

export class CustomerModel {
  IdentificationNumber: string;
  NameEn: string;
  NameBn: string;
  Email: string;
  ContactNumber: string;
  Addresses: AddressModel[];
  Attachments: StorageDocumentModel[];
}
