import { BloodGroup } from 'src/common/enums/blood-group.enum';
import { Gender } from 'src/common/enums/gender.enum';
import { MaritalStatus } from 'src/common/enums/marital-status.enum';
import { Profession } from 'src/common/enums/profession.enum';
import { Religion } from 'src/common/enums/religion.enum';
import { PersonModel } from '../../person/models/person.model';

export class ContactPersonModel extends PersonModel {
  private _ContactPersonId: string;

  constructor(
    contactPersonId: string,
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
    this._ContactPersonId = contactPersonId;
  }

  public get ContactPersonId(): string {
    return this._ContactPersonId;
  }
}
