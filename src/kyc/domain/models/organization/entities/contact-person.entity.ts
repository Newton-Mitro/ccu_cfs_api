import { BaseEntity } from 'src/common/entities/base-entity';
import { BloodGroup } from 'src/common/enums/blood-group.enum';
import { Gender } from 'src/common/enums/gender.enum';
import { MaritalStatus } from 'src/common/enums/marital-status.enum';
import { Profession } from 'src/common/enums/profession.enum';
import { Religion } from 'src/common/enums/religion.enum';

export class ContactPersonEntity extends BaseEntity {
  private _PersonId: string;
  private _IdentificationNumber: string;
  private _DateOfBirth: string;
  private _Gender: Gender;
  private _NameEn: string;
  private _NameBn: string;
  private _BloodGroup: BloodGroup;
  private _Religion: Religion;
  private _MaritalStatus: MaritalStatus;
  private _Profession: Profession;
  private _ContactNumber: string;
  private _MobileNumber: string;
  private _PhoneNumber: string;
  private _Email: string;
  private _NID: string;
  private _BirthRegistrationNumber: string;

  constructor(
    contactPersonId: string,
    personId: string,
    identificationNumber: string,
    dateOfBirth: string,
    gender: Gender,
    nameEn: string,
    nameBn: string,
    bloodGroup: BloodGroup,
    religion: Religion,
    maritalStatus: MaritalStatus,
    profession: Profession,
    contactNumber: string,
    mobileNumber: string,
    phoneNumber: string,
    email: string,
    nid: string,
    birthRegistrationNumber: string,
  ) {
    super(contactPersonId);
    this._PersonId = personId;
    this._IdentificationNumber = identificationNumber;
    this._DateOfBirth = dateOfBirth;
    this._Gender = gender;
    this._NameEn = nameEn;
    this._NameBn = nameBn;
    this._BloodGroup = bloodGroup;
    this._Religion = religion;
    this._MaritalStatus = maritalStatus;
    this._Profession = profession;
    this._ContactNumber = contactNumber;
    this._MobileNumber = mobileNumber;
    this._PhoneNumber = phoneNumber;
    this._Email = email;
    this._NID = nid;
    this._BirthRegistrationNumber = birthRegistrationNumber;
  }

  public get PersonId(): string {
    return this._PersonId;
  }
  public set PersonId(value: string) {
    this._PersonId = value;
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

  public get PhoneNumber(): string {
    return this._PhoneNumber;
  }

  public set PhoneNumber(value: string) {
    this._PhoneNumber = value;
  }

  public get MobileNumber(): string {
    return this._MobileNumber;
  }

  public set MobileNumber(value: string) {
    this._MobileNumber = value;
  }

  public get DateOfBirth(): string {
    return this._DateOfBirth;
  }

  public set DateOfBirth(value: string) {
    this._DateOfBirth = value;
  }

  public get NID(): string {
    return this._NID;
  }

  public set NID(value: string) {
    this._NID = value;
  }

  public get BirthRegistrationNumber(): string {
    return this._BirthRegistrationNumber;
  }

  public set BirthRegistrationNumber(value: string) {
    this._BirthRegistrationNumber = value;
  }

  public get BloodGroup(): BloodGroup {
    return this._BloodGroup;
  }

  public set BloodGroup(value: BloodGroup) {
    this._BloodGroup = value;
  }

  public get Gender(): Gender {
    return this._Gender;
  }

  public set Gender(value: Gender) {
    this._Gender = value;
  }

  public get Religion(): Religion {
    return this._Religion;
  }

  public set Religion(value: Religion) {
    this._Religion = value;
  }

  public get Profession(): Profession {
    return this._Profession;
  }

  public set Profession(value: Profession) {
    this._Profession = value;
  }

  public get MaritalStatus(): MaritalStatus {
    return this._MaritalStatus;
  }

  public set MaritalStatus(value: MaritalStatus) {
    this._MaritalStatus = value;
  }
}
