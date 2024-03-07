import { FamilyTreeStatus } from '../enum/family-tree-status.enum';
import { Relationship } from '../enum/relationship.enum';
import { FamilyAndRelativeModel } from './family-and-relative.model';

export class FamilyTreeModel {
  private _FirstPerson: FamilyAndRelativeModel;
  public get FirstPerson(): FamilyAndRelativeModel {
    return this._FirstPerson;
  }
  public set FirstPerson(value: FamilyAndRelativeModel) {
    this._FirstPerson = value;
  }
  private _SecondPersonRelationshipWithFirstPerson: Relationship;
  public get SecondPersonRelationshipWithFirstPerson(): Relationship {
    return this._SecondPersonRelationshipWithFirstPerson;
  }
  public set SecondPersonRelationshipWithFirstPerson(value: Relationship) {
    this._SecondPersonRelationshipWithFirstPerson = value;
  }
  private _SecondPerson: FamilyAndRelativeModel;
  public get SecondPerson(): FamilyAndRelativeModel {
    return this._SecondPerson;
  }
  public set SecondPerson(value: FamilyAndRelativeModel) {
    this._SecondPerson = value;
  }
  private _FirstPersonRelationshipWithSecondPerson: Relationship;
  public get FirstPersonRelationshipWithSecondPerson(): Relationship {
    return this._FirstPersonRelationshipWithSecondPerson;
  }
  public set FirstPersonRelationshipWithSecondPerson(value: Relationship) {
    this._FirstPersonRelationshipWithSecondPerson = value;
  }
  private _Status: FamilyTreeStatus;
  public get Status(): FamilyTreeStatus {
    return this._Status;
  }
  public set Status(value: FamilyTreeStatus) {
    this._Status = value;
  }
}
