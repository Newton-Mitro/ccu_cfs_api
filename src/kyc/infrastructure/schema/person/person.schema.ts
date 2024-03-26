import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BloodGroup } from 'src/common/enums/blood-group.enum';
import { Gender } from 'src/common/enums/gender.enum';
import { MaritalStatus } from 'src/common/enums/marital-status.enum';
import { Profession } from 'src/common/enums/profession.enum';
import { Religion } from 'src/common/enums/religion.enum';
import { Customer } from '../common/customer.schema';
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
  DateOfBirth: Date;

  @Prop({ trim: true })
  NID: string;

  @Prop({ trim: true })
  BirthRegistrationNumber: string;

  @Prop({ type: String, enum: Object.values(BloodGroup) })
  BloodGroup: BloodGroup;

  @Prop({ require: true, type: String, enum: Object.values(Gender) })
  Gender: Gender;

  @Prop({ require: true, type: String, enum: Object.values(Religion) })
  Religion: Religion;

  @Prop({
    type: String,
    default: Profession.UNWILLING_TO_REVEAL,
    enum: Object.values(Profession),
  })
  Profession: Profession;

  @Prop({ require: true, type: String, enum: Object.values(MaritalStatus) })
  MaritalStatus: MaritalStatus;

  @Prop()
  Photo: string;

  @Prop({ type: Array(FamilyAndRelativeSchema) })
  FamilyTree: FamilyAndRelative[];

  @Prop({ type: Array(EducationSchema) })
  Educations: Education[];

  @Prop({ type: Array(TrainingSchema) })
  Trainings: Training[];

  @Prop({ type: Array(EmploymentHistorySchema) })
  EmploymentHistories: EmploymentHistory[];

  @Prop({ type: Array(PersonAttachmentSchema) })
  Attachments: PersonAttachment[];
}

export const PersonSchema = SchemaFactory.createForClass(Person);
export type PersonDocument = Person & Document;
export const PERSON_MODEL = Person.name;
