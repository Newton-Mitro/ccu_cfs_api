import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Gender } from 'src/kyc/domain/enum/gender.enum';
import { MaritalStatus } from 'src/kyc/domain/enum/marital-status.enum';
import { Profession } from 'src/kyc/domain/enum/profession.enum';
import { Religion } from 'src/kyc/domain/enum/religion.enum';
import { BaseCustomer } from './base-customer.schema';

@Schema()
export class HumanCustomer extends BaseCustomer {
  constructor() {
    super();
  }

  @Prop({ require: true, trim: true })
  DateOfBirth: string;

  @Prop({ trim: true })
  NID: string;

  @Prop({ trim: true })
  BirthRegistrationNumber: string;

  @Prop({
    type: String,
    enum: Object.values(Gender),
    default: Gender.Male,
  })
  Gender: Gender;

  @Prop({
    type: String,
    enum: Object.values(Religion),
    default: Religion.Christian,
  })
  Religion: Religion;

  @Prop({
    type: String,
    enum: Object.values(Profession),
    default: Profession.Rather_Not_Say,
  })
  Profession: Profession;

  @Prop({
    type: String,
    enum: Object.values(MaritalStatus),
    default: MaritalStatus.Single,
  })
  MaritalStatus: MaritalStatus;
}

export type HumanCustomerDocument = HumanCustomer & Document;
export const HUMAN_CUSTOMER_MODEL = HumanCustomer.name;
export const HumanCustomerSchema = SchemaFactory.createForClass(HumanCustomer);