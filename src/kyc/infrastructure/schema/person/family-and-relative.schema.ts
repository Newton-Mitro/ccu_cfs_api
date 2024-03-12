import { Prop, Schema } from '@nestjs/mongoose';
import { BloodGroup } from 'src/common/enums/blood-group.enum';
import { Gender } from 'src/common/enums/gender.enum';
import { MaritalStatus } from 'src/common/enums/marital-status.enum';
import { Profession } from 'src/common/enums/profession.enum';
import { Relationship } from 'src/common/enums/relationship.enum';
import { Religion } from 'src/common/enums/religion.enum';
import { FamilyTreeStatus } from 'src/kyc/domain/common/enums/family-tree-status.enum';

@Schema()
export class FamilyAndRelativeSchema {
  @Prop()
  IdentificationNumber: string;

  @Prop({ required: true, trim: true })
  NameEn: string;

  @Prop()
  NameBn: string;

  @Prop()
  Email: string;

  @Prop()
  ContactNumber: string;

  @Prop()
  DateOfBirth: Date;

  @Prop()
  NID: string;

  @Prop()
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

  @Prop({
    type: String,
    enum: Object.values(Relationship),
  })
  Relationship: Relationship;

  @Prop({
    type: String,
    default: FamilyTreeStatus.PENDING,
    enum: Object.values(FamilyTreeStatus),
  })
  Status: FamilyTreeStatus;
}
