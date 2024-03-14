import { BaseEntity } from 'src/common/entities/base-entity';

export class BranchEntity extends BaseEntity {
  private _OrganizationId: string;
  private _IdentificationNumber: string;
  private _NameEn: string;
  private _NameBn: string;
  private _Email: string;
  private _ContactNumber: string;
  private _MobileNumber: string;
  private _PhoneNumber: string;
  private _FaxNumber: string;
  private _Website: string;

  constructor(
    branchId: string,
    organizationId: string,
    identificationNumber: string,
    nameEn: string,
    nameBn: string,
    email: string,
    contactNumber: string,
    mobileNumber: string,
    phoneNumber: string,
    faxNumber: string,
    website: string,
  ) {
    super(branchId);
    this._OrganizationId = organizationId;
    this._IdentificationNumber = identificationNumber;
    this._NameEn = nameEn;
    this._NameBn = nameBn;
    this._Email = email;
    this._ContactNumber = contactNumber;
    this._MobileNumber = mobileNumber;
    this._PhoneNumber = phoneNumber;
    this._FaxNumber = faxNumber;
    this._Website = website;
  }

  public get OrganizationId(): string {
    return this._OrganizationId;
  }
  public set OrganizationId(value: string) {
    this._OrganizationId = value;
  }

  public get IdentificationNumber(): string {
    return this._IdentificationNumber;
  }
  public set IdentificationNumber(value: string) {
    this._IdentificationNumber = value;
  }

  public get NameEn(): string {
    return this._NameEn;
  }
  public set NameEn(value: string) {
    this._NameEn = value;
  }

  public get NameBn(): string {
    return this._NameBn;
  }
  public set NameBn(value: string) {
    this._NameBn = value;
  }

  public get Email(): string {
    return this._Email;
  }
  public set Email(value: string) {
    this._Email = value;
  }

  public get ContactNumber(): string {
    return this._ContactNumber;
  }
  public set ContactNumber(value: string) {
    this._ContactNumber = value;
  }

  public get MobileNumber(): string {
    return this._MobileNumber;
  }
  public set MobileNumber(value: string) {
    this._MobileNumber = value;
  }

  public get PhoneNumber(): string {
    return this._PhoneNumber;
  }
  public set PhoneNumber(value: string) {
    this._PhoneNumber = value;
  }

  public get FaxNumber(): string {
    return this._FaxNumber;
  }
  public set FaxNumber(value: string) {
    this._FaxNumber = value;
  }

  public get Website(): string {
    return this._Website;
  }
  public set Website(value: string) {
    this._Website = value;
  }
}
