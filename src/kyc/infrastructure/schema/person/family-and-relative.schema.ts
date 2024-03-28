import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IdentifiableEntitySchema } from 'src/common/database/mongoose/identifiable-entity.schema';
import { BloodGroup } from 'src/common/enums/blood-group.enum';
import { Gender } from 'src/common/enums/gender.enum';
import { MaritalStatus } from 'src/common/enums/marital-status.enum';
import { Profession } from 'src/common/enums/profession.enum';
import { Relationship } from 'src/common/enums/relationship.enum';
import { Religion } from 'src/common/enums/religion.enum';
import { FamilyTreeStatus } from 'src/kyc/domain/enums/family-tree-status.enum';

@Schema()
export class FamilyAndRelative extends IdentifiableEntitySchema {
  @Prop()
  personId: string;

  @Prop()
  identificationNumber: string;

  @Prop({ required: true, trim: true })
  nameEn: string;

  @Prop()
  nameBn: string;

  @Prop()
  email: string;

  @Prop()
  contactNumber: string;

  @Prop()
  phoneNumber: string;

  @Prop()
  mobileNumber: string;

  @Prop()
  dateOfBirth: Date;

  @Prop()
  nid: string;

  @Prop()
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

  @Prop({
    type: String,
    enum: Object.values(Relationship),
  })
  relationship: Relationship;

  @Prop({
    type: String,
    default: FamilyTreeStatus.PENDING,
    enum: Object.values(FamilyTreeStatus),
  })
  status: FamilyTreeStatus;
}

export const FamilyAndRelativeSchema =
  SchemaFactory.createForClass(FamilyAndRelative);
