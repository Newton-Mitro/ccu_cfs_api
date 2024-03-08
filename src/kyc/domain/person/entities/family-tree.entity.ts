import { Relationship } from '../../../../common/enums/relationship.enum';
import { KYCAttachmentEntity } from '../../common/entities/kyc-attachment.entity';
import { FamilyTreeStatus } from '../../common/enums/family-tree-status.enum';

export class FamilyTreeEntity {
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
  private _BloodGroup: string;
  public get BloodGroup(): string {
    return this._BloodGroup;
  }
  public set BloodGroup(value: string) {
    this._BloodGroup = value;
  }
  private _Gender: string;
  public get Gender(): string {
    return this._Gender;
  }
  public set Gender(value: string) {
    this._Gender = value;
  }
  private _Religion: string;
  public get Religion(): string {
    return this._Religion;
  }
  public set Religion(value: string) {
    this._Religion = value;
  }
  private _MaritalStatus: string;
  public get MaritalStatus(): string {
    return this._MaritalStatus;
  }
  public set MaritalStatus(value: string) {
    this._MaritalStatus = value;
  }
  private _Alive: boolean;
  public get Alive(): boolean {
    return this._Alive;
  }
  public set Alive(value: boolean) {
    this._Alive = value;
  }
  private _Relationship: Relationship;
  public get Relationship(): Relationship {
    return this._Relationship;
  }
  public set Relationship(value: Relationship) {
    this._Relationship = value;
  }
  private _Status: FamilyTreeStatus;
  public get Status(): FamilyTreeStatus {
    return this._Status;
  }
  public set Status(value: FamilyTreeStatus) {
    this._Status = value;
  }
  private _Attachments: KYCAttachmentEntity[];
  public get Attachments(): KYCAttachmentEntity[] {
    return this._Attachments;
  }
  public set Attachments(value: KYCAttachmentEntity[]) {
    this._Attachments = value;
  }
}
