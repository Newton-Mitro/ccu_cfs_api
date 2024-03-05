import { BadRequestException, HttpStatus } from '@nestjs/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BloodGroup } from '../../core/enum/blood-group.enum';
import { Gender } from '../../core/enum/gender.enum';
import { MaritalStatus } from '../../core/enum/marital-status.enum';
import { Profession } from '../../core/enum/profession.enum';
import { Religion } from '../../core/enum/religion.enum';
import { Customer } from './customer.schema';
import { Education, EducationSchema } from './education.schema';
import {
  EmploymentHistory,
  EmploymentHistorySchema,
} from './employment-history.schema';
import {
  FamilyAndRelative,
  FamilyAndRelativeSchema,
} from './family-and-relative.schema';
import { Training, TrainingSchema } from './training.schema';

@Schema()
export class Person extends Customer {
  constructor() {
    super();
  }
  @Prop({ require: true })
  dateOfBirth: Date;

  @Prop({ trim: true })
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
    default: Profession.Rather_Not_Say,
    enum: Object.values(Profession),
  })
  profession: Profession;

  @Prop({ require: true, type: String, enum: Object.values(MaritalStatus) })
  maritalStatus: MaritalStatus;

  @Prop({ default: true })
  alive: boolean;

  @Prop()
  photo: string;

  @Prop({ type: Array(FamilyAndRelativeSchema) })
  familyAndRelatives: FamilyAndRelative[];

  @Prop({ type: Array(EducationSchema) })
  educations: Education[];

  @Prop({ type: Array(TrainingSchema) })
  trainings: Training[];

  @Prop({ type: Array(EmploymentHistorySchema) })
  employmentHistories: EmploymentHistory[];
}

export type PersonDocument = Person & Document;
export const PERSON_MODEL = Person.name;

export const PersonSchema = SchemaFactory.createForClass(Person);

PersonSchema.pre('validate', function (next) {
  if (this.nid === '' && this.birthRegistrationNumber === '') {
    const result = {
      message: 'Please provide NID or Birth Registration Number',
      error: 'Bad request',
      statusCode: HttpStatus.BAD_REQUEST,
    };
    throw new BadRequestException(result);
  }
  next();
});
