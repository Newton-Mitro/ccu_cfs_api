import { Customer } from '../../infrastructure/schemas/customer.schema';
import { BloodGroup } from '../enum/blood-group.enum';
import { Gender } from '../enum/gender.enum';
import { MaritalStatus } from '../enum/marital-status.enum';
import { Profession } from '../enum/profession.enum';
import { Religion } from '../enum/religion.enum';
import { EducationModel } from './education.model';
import { EmploymentHistoryModel } from './employment-history.model';
import { FamilyAndRelativeModel } from './family-and-relative.model';
import { TrainingModel } from './training.model';

export class Person extends Customer {
  dateOfBirth: Date;
  nid: string;
  birthRegistrationNumber: string;
  bloodGroup: BloodGroup;
  gender: Gender;
  religion: Religion;
  profession: Profession;
  maritalStatus: MaritalStatus;
  alive: boolean;
  photo: string;
  familyAndRelatives: FamilyAndRelativeModel[];
  educations: EducationModel[];
  trainings: TrainingModel[];
  employmentHistories: EmploymentHistoryModel[];
}
