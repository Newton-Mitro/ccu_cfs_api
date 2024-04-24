import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BloodGroup } from '../../../../common/domain/enums/blood-group.enum';
import { Gender } from '../../../../common/domain/enums/gender.enum';
import { MaritalStatus } from '../../../../common/domain/enums/marital-status.enum';
import { Profession } from '../../../../common/domain/enums/profession.enum';
import { Religion } from '../../../../common/domain/enums/religion.enum';
import { IdentifiableEntitySchema } from '../../../../common/infrastructure/schemas/identifiable-entity.schema';

@Schema()
export class ContactPerson extends IdentifiableEntitySchema {
  @Prop()
  personId: string;

  @Prop()
  identificationNumber: string;

  @Prop({ required: true, trim: true })
  nameEn: string;

  @Prop()
  nameBn: string;

  @Prop()
  dateOfBirth: Date;

  @Prop({ require: true, type: String, enum: Object.values(Gender) })
  gender: Gender;

  @Prop({ type: String, enum: Object.values(BloodGroup) })
  bloodGroup: BloodGroup;

  @Prop({ require: true, type: String, enum: Object.values(Religion) })
  religion: Religion;

  @Prop()
  nid: string;

  @Prop()
  birthRegistrationNumber: string;

  @Prop({ require: true, type: String, enum: Object.values(MaritalStatus) })
  maritalStatus: MaritalStatus;

  @Prop({ require: true, type: String, enum: Object.values(Profession) })
  profession: Profession;

  @Prop({ required: true, trim: true })
  contactNumber: string;

  @Prop()
  mobileNumber: string;

  @Prop()
  phoneNumber: string;

  @Prop({ required: true, trim: true })
  email: string;
}

export const ContactPersonSchema = SchemaFactory.createForClass(ContactPerson);
