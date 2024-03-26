export class OrganizationModel {
  private _OrganizationId: string;
  private _IdentificationNumber: string;
  private _RegistrationNumber: string;
  private _TIN: string;
  private _NameEn: string;
  private _NameBn: string;
  private _Email: string;
  private _ContactNumber: string;
  private _MobileNumber: string;
  private _PhoneNumber: string;
  private _Fax: string;
  private _Website: string;
  private _Logo: string;
  protected _CreatedAt: Date;
  protected _UpdatedAt: Date;
  protected _CreatedBy: string;
  protected _UpdatedBy: string;

  constructor(
    organizationId: string,
    identificationNumber: string,
    registrationNumber: string,
    tin: string,
    nameEn: string,
    nameBn: string,
    email: string,
    contactNumber: string,
    mobileNumber: string,
    phoneNumber: string,
    fax: string,
    website: string,
    logo: string,
    createdAt: Date,
    updatedAt: Date,
    createdBy: string,
    updatedBy: string,
  ) {
    this._OrganizationId = organizationId;
    this._IdentificationNumber = identificationNumber;
    this._RegistrationNumber = registrationNumber;
    this._TIN = tin;
    this._NameEn = nameEn;
    this._NameBn = nameBn;
    this._Email = email;
    this._ContactNumber = contactNumber;
    this._MobileNumber = mobileNumber;
    this._PhoneNumber = phoneNumber;
    this._Fax = fax;
    this._Website = website;
    this._Logo = logo;
    this._CreatedAt = createdAt;
    this._UpdatedAt = updatedAt;
    this._CreatedBy = createdBy;
    this._UpdatedBy = updatedBy;
  }

  public get OrganizationId(): string {
    return this._OrganizationId;
  }

  public get IdentificationNumber(): string {
    return this._IdentificationNumber;
  }

  public get RegistrationNumber(): string {
    return this._RegistrationNumber;
  }

  public get TIN(): string {
    return this._TIN;
  }

  public get NameEn(): string {
    return this._NameEn;
  }

  public get NameBn(): string {
    return this._NameBn;
  }

  public get Email(): string {
    return this._Email;
  }

  public get ContactNumber(): string {
    return this._ContactNumber;
  }

  public get MobileNumber(): string {
    return this._MobileNumber;
  }

  public get PhoneNumber(): string {
    return this._PhoneNumber;
  }

  public get Fax(): string {
    return this._Fax;
  }

  public get Website(): string {
    return this._Website;
  }

  public get Logo(): string {
    return this._Logo;
  }

  public get CreatedAt(): Date {
    return this._CreatedAt;
  }

  public get UpdatedAt(): Date {
    return this._UpdatedAt;
  }

  public get CreatedBy(): string {
    return this._CreatedBy;
  }

  public get UpdatedBy(): string {
    return this._UpdatedBy;
  }
}
