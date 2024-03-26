import { BloodGroup } from 'src/common/enums/blood-group.enum';
import { Gender } from 'src/common/enums/gender.enum';
import { MaritalStatus } from 'src/common/enums/marital-status.enum';
import { Profession } from 'src/common/enums/profession.enum';
import { Relationship } from 'src/common/enums/relationship.enum';
import { Religion } from 'src/common/enums/religion.enum';
import { FamilyTreeStatus } from 'src/kyc/domain/enums/family-tree-status.enum';
import { PersonModel } from './person.model';

export class FamilyAndRelativeModel extends PersonModel {
  private _FamilyTreeId: string;
  private _Relationship: Relationship;
  private _Status: FamilyTreeStatus;

  constructor(
    familyTreeId: string,
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
    relationship: Relationship,
    status: FamilyTreeStatus,
    createdAt: Date,
    updatedAt: Date,
    createdBy: string,
    updatedBy: string,
  ) {
    super(
      personId,
      identificationNumber,
      nameEn,
      nameBn,
      contactNumber,
      mobileNumber,
      phoneNumber,
      email,
      customerType,
      dateOfBirth,
      gender,
      bloodGroup,
      religion,
      maritalStatus,
      profession,
      nid,
      birthRegistrationNumber,
      photo,
      createdAt,
      updatedAt,
      createdBy,
      updatedBy,
    );

    this._FamilyTreeId = familyTreeId;
    this._Relationship = relationship;
    this._Status = status;
  }

  public get FamilyTreeId(): string {
    return this._FamilyTreeId;
  }

  public get Relationship(): Relationship {
    return this._Relationship;
  }

  public get Status(): FamilyTreeStatus {
    return this._Status;
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
