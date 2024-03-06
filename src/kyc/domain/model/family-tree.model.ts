import { FamilyTreeStatus } from '../enum/family-tree-status.enum';
import { Relationship } from '../enum/relationship.enum';
import { FamilyAndRelativeModel } from './family-and-relative.model';

export class FamilyTreeModel {
  firstPerson: FamilyAndRelativeModel;
  secondPersonRelationshipWithFirstPerson: Relationship;
  secondPerson: FamilyAndRelativeModel;
  firstPersonRelationshipWithSecondPerson: Relationship;
  status: FamilyTreeStatus;
}
