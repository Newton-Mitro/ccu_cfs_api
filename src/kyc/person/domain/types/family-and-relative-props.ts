import { Relationship } from '../../../../common/enums/relationship.enum';
import { FamilyTreeStatus } from '../enums/family-tree-status.enum';
import { PersonProps } from './person-props';

export type FamilyAndRelativeProps = PersonProps & {
  familyTreeId: string;
  relationship: Relationship;
  status: FamilyTreeStatus;
};
