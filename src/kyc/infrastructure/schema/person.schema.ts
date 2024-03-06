import { BadRequestException, HttpStatus } from '@nestjs/common';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BloodGroup } from 'src/kyc/domain/enum/blood-group.enum';
import { Gender } from 'src/kyc/domain/enum/gender.enum';
import { MaritalStatus } from 'src/kyc/domain/enum/marital-status.enum';
import { Profession } from 'src/kyc/domain/enum/profession.enum';
import { Religion } from 'src/kyc/domain/enum/religion.enum';
import { Customer } from './customer.schema';
import { Education, EducationSchema } from './education.schema';
import {
  EmploymentHistory,
  EmploymentHistorySchema,
} from './employment-history.schema';
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
    default: Profession.Rather_Not_Say,
    enum: Object.values(Profession),
  })
  Profession: Profession;

  @Prop({ require: true, type: String, enum: Object.values(MaritalStatus) })
  MaritalStatus: MaritalStatus;

  @Prop({ default: true })
  Alive: boolean;

  @Prop()
  Photo: string;

  @Prop({ type: Array(EducationSchema) })
  Educations: Education[];

  @Prop({ type: Array(TrainingSchema) })
  Trainings: Training[];

  @Prop({ type: Array(EmploymentHistorySchema) })
  EmploymentHistories: EmploymentHistory[];
}

export type PersonDocument = Person & Document;
export const PERSON_MODEL = Person.name;

export const PersonSchema = SchemaFactory.createForClass(Person);

PersonSchema.pre('validate', function (next) {
  if (this.NID === '' && this.BirthRegistrationNumber === '') {
    const result = {
      message: 'Please provide NID or Birth Registration Number',
      error: 'Bad request',
      statusCode: HttpStatus.BAD_REQUEST,
    };
    throw new BadRequestException(result);
  }
  next();
});
