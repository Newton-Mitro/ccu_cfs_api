import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BloodGroup } from 'src/common/enums/blood-group.enum';
import { Gender } from 'src/common/enums/gender.enum';
import { MaritalStatus } from 'src/common/enums/marital-status.enum';
import { Religion } from 'src/common/enums/religion.enum';
import { IdentifiableEntitySchema } from 'src/config/database/mongoose/identifiable-entity.schema';

@Schema()
export class ContactPerson extends IdentifiableEntitySchema {
  @Prop()
  PersonId: string;

  @Prop()
  IdentificationNumber: string;

  @Prop({ required: true, trim: true })
  NameEn: string;

  @Prop()
  NameBn: string;

  @Prop()
  DateOfBirth: Date;

  @Prop({ require: true, type: String, enum: Object.values(Gender) })
  Gender: Gender;

  @Prop({ type: String, enum: Object.values(BloodGroup) })
  BloodGroup: BloodGroup;

  @Prop({ require: true, type: String, enum: Object.values(Religion) })
  Religion: Religion;

  @Prop()
  NID: string;

  @Prop()
  BirthRegistrationNumber: string;

  @Prop({ require: true, type: String, enum: Object.values(MaritalStatus) })
  MaritalStatus: MaritalStatus;

  @Prop({ required: true, trim: true })
  ContactNumber: string;

  @Prop()
  MobileNumber: string;

  @Prop()
  PhoneNumber: string;

  @Prop({ required: true, trim: true })
  Email: string;
}

export const ContactPersonSchema = SchemaFactory.createForClass(ContactPerson);
