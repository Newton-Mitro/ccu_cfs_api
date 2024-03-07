import { BloodGroup } from '../enum/blood-group.enum';
import { Gender } from '../enum/gender.enum';
import { MaritalStatus } from '../enum/marital-status.enum';
import { Profession } from '../enum/profession.enum';
import { Religion } from '../enum/religion.enum';
import { CustomerModel } from './customer.model';
import { EducationModel } from './education.model';
import { EmploymentHistoryModel } from './employment-history.model';
import { TrainingModel } from './training.model';

export class PersonModel extends CustomerModel {
  private _DateOfBirth: Date;
  public get DateOfBirth(): Date {
    return this._DateOfBirth;
  }
  public set DateOfBirth(value: Date) {
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
  private _BloodGroup: BloodGroup;
  public get BloodGroup(): BloodGroup {
    return this._BloodGroup;
  }
  public set BloodGroup(value: BloodGroup) {
    this._BloodGroup = value;
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
  private _Alive: boolean;
  public get Alive(): boolean {
    return this._Alive;
  }
  public set Alive(value: boolean) {
    this._Alive = value;
  }
  private _Photo: string;
  public get Photo(): string {
    return this._Photo;
  }
  public set Photo(value: string) {
    this._Photo = value;
  }
  private _Educations: EducationModel[];
  public get Educations(): EducationModel[] {
    return this._Educations;
  }
  public set Educations(value: EducationModel[]) {
    this._Educations = value;
  }
  private _Trainings: TrainingModel[];
  public get Trainings(): TrainingModel[] {
    return this._Trainings;
  }
  public set Trainings(value: TrainingModel[]) {
    this._Trainings = value;
  }
  private _EmploymentHistories: EmploymentHistoryModel[];
  public get EmploymentHistories(): EmploymentHistoryModel[] {
    return this._EmploymentHistories;
  }
  public set EmploymentHistories(value: EmploymentHistoryModel[]) {
    this._EmploymentHistories = value;
  }
}
