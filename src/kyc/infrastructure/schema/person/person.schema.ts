import { Prop, Schema } from '@nestjs/mongoose';
import { BloodGroup } from 'src/common/enums/blood-group.enum';
import { Gender } from 'src/common/enums/gender.enum';
import { MaritalStatus } from 'src/common/enums/marital-status.enum';
import { Profession } from 'src/common/enums/profession.enum';
import { Religion } from 'src/common/enums/religion.enum';
import { CustomerSchema } from '../common/customer.schema';
import { EducationSchema } from './education.schema';
import { EmploymentHistorySchema } from './employment-history.schema';
import { FamilyAndRelativeSchema } from './family-and-relative.schema';
import { PersonAttachmentSchema } from './person-attachment.schema';
import { TrainingSchema } from './training.schema';

@Schema()
export class PersonSchema extends CustomerSchema {
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

  @Prop({ type: PersonAttachmentSchema })
  Photo: Object;

  @Prop({ type: Array() })
  FamilyTree: FamilyAndRelativeSchema[];

  @Prop({ type: Array() })
  Educations: EducationSchema[];

  @Prop({ type: Array() })
  Trainings: TrainingSchema[];

  @Prop({ type: Array() })
  EmploymentHistories: EmploymentHistorySchema[];

  @Prop({ type: Array() })
  Attachments: PersonAttachmentSchema[];
}

export type PersonDocument = PersonSchema & Document;
export const PERSON_MODEL = PersonSchema.name;
