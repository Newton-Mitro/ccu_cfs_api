import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class ContactPerson {
  @Prop()
  IdentificationNumber: string;

  @Prop({ required: true, trim: true })
  NameEn: string;

  @Prop()
  NameBn: string;

  @Prop()
  DateOfBirth: Date;

  @Prop()
  Gender: string;

  @Prop()
  BloodGroup: string;

  @Prop()
  Religion: string;

  @Prop()
  NID: string;

  @Prop()
  BirthRegistrationNumber: string;

  @Prop()
  MaritalStatus: string;

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
