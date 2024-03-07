import { AddressModel } from './address.model';
import { KYCAttachmentModel } from './kyc-attachment-model';

export class CustomerModel {
  private _CustomerId: string;
  public get CustomerId(): string {
    return this._CustomerId;
  }
  public set CustomerId(value: string) {
    this._CustomerId = value;
  }
  private _IdentificationNumber: string;
  public get IdentificationNumber(): string {
    return this._IdentificationNumber;
  }
  public set IdentificationNumber(value: string) {
    this._IdentificationNumber = value;
  }
  private _NameEn: string;
  public get NameEn(): string {
    return this._NameEn;
  }
  public set NameEn(value: string) {
    this._NameEn = value;
  }
  private _NameBn: string;
  public get NameBn(): string {
    return this._NameBn;
  }
  public set NameBn(value: string) {
    this._NameBn = value;
  }
  private _Email: string;
  public get Email(): string {
    return this._Email;
  }
  public set Email(value: string) {
    this._Email = value;
  }
  private _ContactNumber: string;
  public get ContactNumber(): string {
    return this._ContactNumber;
  }
  public set ContactNumber(value: string) {
    this._ContactNumber = value;
  }
  private _Addresses: AddressModel[];
  public get Addresses(): AddressModel[] {
    return this._Addresses;
  }
  public set Addresses(value: AddressModel[]) {
    this._Addresses = value;
  }
  private _Attachments: KYCAttachmentModel[];
  public get Attachments(): KYCAttachmentModel[] {
    return this._Attachments;
  }
  public set Attachments(value: KYCAttachmentModel[]) {
    this._Attachments = value;
  }
}
