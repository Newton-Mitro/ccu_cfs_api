import { Relationship } from 'src/common/enums/relationship.enum';
import { FamilyTreeStatus } from 'src/kyc/domain/enums/family-tree-status.enum';
import { PersonModel, PersonProps } from './person.model';

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
