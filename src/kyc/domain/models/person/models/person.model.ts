import { BloodGroup } from 'src/common/enums/blood-group.enum';
import { Gender } from 'src/common/enums/gender.enum';
import { MaritalStatus } from 'src/common/enums/marital-status.enum';
import { Profession } from 'src/common/enums/profession.enum';
import { Religion } from 'src/common/enums/religion.enum';

export class PersonModel {
  private _PersonId: string;
  private _IdentificationNumber: string;
  private _NameEn: string;
  private _NameBn: string;
  private _ContactNumber: string;
  private _MobileNumber: string;
  private _PhoneNumber: string;
  private _Email: string;
  private _CustomerType: string;
  private _DateOfBirth: Date;
  private _Gender: Gender;
  private _BloodGroup: BloodGroup;
  private _Religion: Religion;
  private _MaritalStatus: MaritalStatus;
  private _Profession: Profession;
  private _NID: string;
  private _BirthRegistrationNumber: string;
  private _Photo: string;
  protected _CreatedAt: Date;
  protected _UpdatedAt: Date;
  protected _CreatedBy: string;
  protected _UpdatedBy: string;

  constructor(
    personId: string,
    identificationNumber: string,
    nameEn: string,
    nameBn: string,
    contactNumber: string,
    mobileNumber: string,
    phoneNumber: string,
    email: string,
    customerType: string,
    dateOfBirth: Date,
    gender: Gender,
    bloodGroup: BloodGroup,
    religion: Religion,
    maritalStatus: MaritalStatus,
    profession: Profession,
    nid: string,
    birthRegistrationNumber: string,
    photo: string,
    createdAt: Date,
    updatedAt: Date,
    createdBy: string,
    updatedBy: string,
  ) {
    this._PersonId = personId;
    this._IdentificationNumber = identificationNumber;
    this._NameEn = nameEn;
    this._NameBn = nameBn;
    this._ContactNumber = contactNumber;
    this._MobileNumber = mobileNumber;
    this._PhoneNumber = phoneNumber;
    this._Email = email;
    this._CustomerType = customerType;
    this._DateOfBirth = dateOfBirth;
    this._Gender = gender;
    this._BloodGroup = bloodGroup;
    this._Religion = religion;
    this._MaritalStatus = maritalStatus;
    this._Profession = profession;
    this._NID = nid;
    this._BirthRegistrationNumber = birthRegistrationNumber;
    this._Photo = photo;
    this._CreatedAt = createdAt;
    this._UpdatedAt = updatedAt;
    this._CreatedBy = createdBy;
    this._UpdatedBy = updatedBy;
  }

  public get PersonId(): string {
    return this._PersonId;
  }

  public get IdentificationNumber(): string {
    return this._IdentificationNumber;
  }

  public get NameEn(): string {
    return this._NameEn;
  }

  public get NameBn(): string {
    return this._NameBn;
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

  public get Email(): string {
    return this._Email;
  }

  public get CustomerType(): string {
    return this._CustomerType;
  }

  public get DateOfBirth(): Date {
    return this._DateOfBirth;
  }

  public get Gender(): Gender {
    return this._Gender;
  }

  public get BloodGroup(): BloodGroup {
    return this._BloodGroup;
  }

  public get Religion(): Religion {
    return this._Religion;
  }

  public get MaritalStatus(): MaritalStatus {
    return this._MaritalStatus;
  }

  public get Profession(): Profession {
    return this._Profession;
  }

  public get NID(): string {
    return this._NID;
  }

  public get BirthRegistrationNumber(): string {
    return this._BirthRegistrationNumber;
  }

  public get Photo(): string {
    return this._Photo;
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
