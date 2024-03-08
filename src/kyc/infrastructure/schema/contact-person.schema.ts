import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@Schema()
export class ContactPerson {
  @Prop({ type: Types.ObjectId })
  ContactPersonPIN: string;

  @Prop({ require: true })
  ContactPersonName: string;

  @Prop({ require: true })
  ContactNumber: string;

  @Prop()
  EmergencyContactNumber: string;

  @Prop()
  Email: string;
}

export const ContactPersonSchema = SchemaFactory.createForClass(ContactPerson);
