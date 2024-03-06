import { FamilyTreeStatus } from '../enum/family-tree-status.enum';
import { Relationship } from '../enum/relationship.enum';
import { FamilyAndRelativeModel } from './family-and-relative.model';

export class FamilyTreeModel {
  FirstPerson: FamilyAndRelativeModel;
  SecondPersonRelationshipWithFirstPerson: Relationship;
  SecondPerson: FamilyAndRelativeModel;
  FirstPersonRelationshipWithSecondPerson: Relationship;
  Status: FamilyTreeStatus;
}
