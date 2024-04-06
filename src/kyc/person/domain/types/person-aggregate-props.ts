import { AddressProps } from '../../../shared/domain/models/address.model';
import { EducationProps } from './education-props';
import { EmploymentHistoryProps } from './employment-history-props';
import { FamilyAndRelativeProps } from './family-and-relative-props';
import { PersonAttachmentProps } from './person-attachment-props';
import { PersonProps } from './person-props';
import { TrainingProps } from './training-props';

export type PersonAggregateProps = PersonProps & {
  addresses: AddressProps[];
  familyTree: FamilyAndRelativeProps[];
  educations: EducationProps[];
  trainings: TrainingProps[];
  employmentHistories: EmploymentHistoryProps[];
  attachments: PersonAttachmentProps[];
};
