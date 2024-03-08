import { Gender } from 'src/common/enums/gender.enum';
import { MaritalStatus } from 'src/common/enums/marital-status.enum';
import { Profession } from 'src/common/enums/profession.enum';
import { Religion } from 'src/common/enums/religion.enum';
import { BaseCustomerModel } from './base-customer.model';

export class HumanCustomerModel extends BaseCustomerModel {
  private _DateOfBirth: string;
  public get DateOfBirth(): string {
    return this._DateOfBirth;
  }
  public set DateOfBirth(value: string) {
    this._DateOfBirth = value;
  }
  private _NID: string;
  public get NID(): string {
    return this._NID;
  }
  public set NID(value: string) {
    this._NID = value;
  }
  private _BirthRegistrationNumber: string;
  public get BirthRegistrationNumber(): string {
    return this._BirthRegistrationNumber;
  }
  public set BirthRegistrationNumber(value: string) {
    this._BirthRegistrationNumber = value;
  }
  private _Gender: Gender;
  public get Gender(): Gender {
    return this._Gender;
  }
  public set Gender(value: Gender) {
    this._Gender = value;
  }
  private _Religion: Religion;
  public get Religion(): Religion {
    return this._Religion;
  }
  public set Religion(value: Religion) {
    this._Religion = value;
  }
  private _Profession: Profession;
  public get Profession(): Profession {
    return this._Profession;
  }
  public set Profession(value: Profession) {
    this._Profession = value;
  }
  private _MaritalStatus: MaritalStatus;
  public get MaritalStatus(): MaritalStatus {
    return this._MaritalStatus;
  }
  public set MaritalStatus(value: MaritalStatus) {
    this._MaritalStatus = value;
  }
}
