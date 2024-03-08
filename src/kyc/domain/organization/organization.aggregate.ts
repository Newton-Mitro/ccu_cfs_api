import { AddressEntity } from '../common/entities/address.entity';
import { KYCAttachmentEntity } from '../common/entities/kyc-attachment.entity';
import { BankAccountEntity } from './entities/bank-account.entity';
import { ContactPersonEntity } from './entities/contact-person.entity';

export class OrganizationAggregate {
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
  private _Addresses: AddressEntity[];
  public get Addresses(): AddressEntity[] {
    return this._Addresses;
  }
  public set Addresses(value: AddressEntity[]) {
    this._Addresses = value;
  }
  private _Attachments: KYCAttachmentEntity[];
  public get Attachments(): KYCAttachmentEntity[] {
    return this._Attachments;
  }
  public set Attachments(value: KYCAttachmentEntity[]) {
    this._Attachments = value;
  }
  private _ParentOrganization: string;
  public get ParentOrganization(): string {
    return this._ParentOrganization;
  }
  public set ParentOrganization(value: string) {
    this._ParentOrganization = value;
  }
  private _PhoneNumber: string;
  public get PhoneNumber(): string {
    return this._PhoneNumber;
  }
  public set PhoneNumber(value: string) {
    this._PhoneNumber = value;
  }
  private _FaxNumber: string;
  public get FaxNumber(): string {
    return this._FaxNumber;
  }
  public set FaxNumber(value: string) {
    this._FaxNumber = value;
  }
  private _Website: string;
  public get Website(): string {
    return this._Website;
  }
  public set Website(value: string) {
    this._Website = value;
  }
  private _Logo: string;
  public get Logo(): string {
    return this._Logo;
  }
  public set Logo(value: string) {
    this._Logo = value;
  }
  private _ContactPeoples: ContactPersonEntity[];
  public get ContactPeoples(): ContactPersonEntity[] {
    return this._ContactPeoples;
  }
  public set ContactPeoples(value: ContactPersonEntity[]) {
    this._ContactPeoples = value;
  }
  private _BankAccounts: BankAccountEntity[];
  public get BankAccounts(): BankAccountEntity[] {
    return this._BankAccounts;
  }
  public set BankAccounts(value: BankAccountEntity[]) {
    this._BankAccounts = value;
  }
}
