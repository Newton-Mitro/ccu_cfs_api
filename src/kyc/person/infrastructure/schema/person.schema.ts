import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BloodGroup } from 'src/common/enums/blood-group.enum';
import { Gender } from 'src/common/enums/gender.enum';
import { MaritalStatus } from 'src/common/enums/marital-status.enum';
import { Profession } from 'src/common/enums/profession.enum';
import { Religion } from 'src/common/enums/religion.enum';
import { Customer } from '../../../shared/infrastructure/schema/customer.schema';
import { Education, EducationSchema } from './education.schema';
import {
  EmploymentHistory,
  EmploymentHistorySchema,
} from './employment-history.schema';
import {
  FamilyAndRelative,
  FamilyAndRelativeSchema,
} from './family-and-relative.schema';
import {
  PersonAttachment,
  PersonAttachmentSchema,
} from './person-attachment.schema';
import { Training, TrainingSchema } from './training.schema';

@Schema()
export class Person extends Customer {
  constructor() {
    super();
  }
  @Prop({ require: true })
  dateOfBirth: Date;

  @Prop({ trim: true, default: null })
  nid: string;

  @Prop({ trim: true })
  birthRegistrationNumber: string;

  @Prop({ type: String, enum: Object.values(BloodGroup) })
  bloodGroup: BloodGroup;

  @Prop({ require: true, type: String, enum: Object.values(Gender) })
  gender: Gender;

  @Prop({ require: true, type: String, enum: Object.values(Religion) })
  religion: Religion;

  @Prop({
    type: String,
    default: Profession.UNWILLING_TO_REVEAL,
    enum: Object.values(Profession),
  })
  profession: Profession;

  @Prop({ require: true, type: String, enum: Object.values(MaritalStatus) })
  maritalStatus: MaritalStatus;

  @Prop()
  photo: string;

  @Prop({ type: Array(FamilyAndRelativeSchema) })
  familyTree: FamilyAndRelative[];

  @Prop({ type: Array(EducationSchema) })
  educations: Education[];

  @Prop({ type: Array(TrainingSchema) })
  trainings: Training[];

  @Prop({ type: Array(EmploymentHistorySchema) })
  employmentHistories: EmploymentHistory[];

  @Prop({ type: Array(PersonAttachmentSchema) })
  attachments: PersonAttachment[];
}

export const PersonSchema = SchemaFactory.createForClass(Person);
export type PersonDocument = Person & Document;
export const PERSON_MODEL = Person.name;
