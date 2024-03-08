import { Schema } from '@nestjs/mongoose';
import { BloodGroup } from '../../../common/enums/blood-group.enum';
import { Gender } from '../../../common/enums/gender.enum';
import { MaritalStatus } from '../../../common/enums/marital-status.enum';
import { Profession } from '../../../common/enums/profession.enum';
import { Religion } from '../../../common/enums/religion.enum';
import { AddressEntity } from '../common/entities/address.entity';
import { KYCAttachmentEntity } from '../common/entities/kyc-attachment.entity';
import { EducationEntity } from './entities/education.entity';
import { EmploymentHistoryEntity } from './entities/employment-history.entity';
import { TrainingEntity } from './entities/training.entity';

@Schema()
export class PersonAggregate {
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
  private _Educations: EducationEntity[];
  public get Educations(): EducationEntity[] {
    return this._Educations;
  }
  public set Educations(value: EducationEntity[]) {
    this._Educations = value;
  }
  private _Trainings: TrainingEntity[];
  public get Trainings(): TrainingEntity[] {
    return this._Trainings;
  }
  public set Trainings(value: TrainingEntity[]) {
    this._Trainings = value;
  }
  private _EmploymentHistories: EmploymentHistoryEntity[];
  public get EmploymentHistories(): EmploymentHistoryEntity[] {
    return this._EmploymentHistories;
  }
  public set EmploymentHistories(value: EmploymentHistoryEntity[]) {
    this._EmploymentHistories = value;
  }
}
