import { Customer } from 'src/kyc/infrastructure/schema/customer.schema';
import { BloodGroup } from '../enum/blood-group.enum';
import { Gender } from '../enum/gender.enum';
import { MaritalStatus } from '../enum/marital-status.enum';
import { Profession } from '../enum/profession.enum';
import { Religion } from '../enum/religion.enum';
import { EducationModel } from './education.model';
import { EmploymentHistoryModel } from './employment-history.model';
import { TrainingModel } from './training.model';

export class Person extends Customer {
  DateOfBirth: Date;
  NID: string;
  BirthRegistrationNumber: string;
  BloodGroup: BloodGroup;
  Gender: Gender;
  Religion: Religion;
  Profession: Profession;
  MaritalStatus: MaritalStatus;
  Alive: boolean;
  Photo: string;
  Educations: EducationModel[];
  Trainings: TrainingModel[];
  EmploymentHistories: EmploymentHistoryModel[];
}
