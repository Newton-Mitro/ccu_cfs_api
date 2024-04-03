import { Relationship } from 'src/common/enums/relationship.enum';
import { PersonModel, PersonProps } from './person.model';
import { FamilyTreeStatus } from '../enums/family-tree-status.enum';

export type FamilyAndRelativeProps = PersonProps & {
  familyTreeId: string;
  relationship: Relationship;
  status: FamilyTreeStatus;
};

export class FamilyAndRelativeModel extends PersonModel {
  readonly familyTreeId: string;
  readonly relationship: Relationship;
  readonly status: FamilyTreeStatus;

  constructor(familyAndRelativeProps: FamilyAndRelativeProps) {
    super(familyAndRelativeProps);

    this.familyTreeId = familyAndRelativeProps.familyTreeId;
    this.relationship = familyAndRelativeProps.relationship;
    this.status = familyAndRelativeProps.status;
  }
}
