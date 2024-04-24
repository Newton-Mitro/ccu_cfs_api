import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { BloodGroup } from '../../../../common/domain/enums/blood-group.enum';
import { Gender } from '../../../../common/domain/enums/gender.enum';
import { MaritalStatus } from '../../../../common/domain/enums/marital-status.enum';
import { Profession } from '../../../../common/domain/enums/profession.enum';
import { Relationship } from '../../../../common/domain/enums/relationship.enum';
import { Religion } from '../../../../common/domain/enums/religion.enum';
import { IdentifiableEntitySchema } from '../../../../common/infrastructure/schemas/identifiable-entity.schema';
import { FamilyTreeStatus } from '../../domain/enums/family-tree-status.enum';

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
