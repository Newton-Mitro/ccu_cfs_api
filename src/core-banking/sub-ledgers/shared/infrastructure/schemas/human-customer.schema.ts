import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Gender } from 'src/common/enums/gender.enum';
import { MaritalStatus } from 'src/common/enums/marital-status.enum';
import { Profession } from 'src/common/enums/profession.enum';
import { Religion } from 'src/common/enums/religion.enum';
import { BaseCustomer } from './base-customer.schema';

@Schema()
export class HumanCustomer extends BaseCustomer {
  constructor() {
    super();
  }

  @Prop()
  personId: string;

  @Prop({ require: true, trim: true })
  dateOfBirth: string;

  @Prop({ trim: true })
  nid: string;

  @Prop({ trim: true })
  birthRegistrationNumber: string;

  @Prop({
    type: String,
    enum: Object.values(Gender),
    default: Gender.MALE,
  })
  gender: Gender;

  @Prop({
    type: String,
    enum: Object.values(Religion),
    default: Religion.CHRISTIAN,
  })
  religion: Religion;

  @Prop({
    type: String,
    enum: Object.values(Profession),
    default: Profession.UNWILLING_TO_REVEAL,
  })
  profession: Profession;

  @Prop({
    type: String,
    enum: Object.values(MaritalStatus),
    default: MaritalStatus.SINGLE,
  })
  maritalStatus: MaritalStatus;
}

export type HumanCustomerDocument = HumanCustomer & Document;
export const HUMAN_CUSTOMER_MODEL = HumanCustomer.name;
export const HumanCustomerSchema = SchemaFactory.createForClass(HumanCustomer);
