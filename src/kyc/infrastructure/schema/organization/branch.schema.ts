import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IdentifiableEntitySchema } from 'src/config/database/mongoose/identifiable-entity.schema';

@Schema()
export class Branch extends IdentifiableEntitySchema {
  @Prop({ required: true, type: String })
  OrganizationId: string;

  @Prop({ required: true, type: String })
  IdentificationNumber: string;

  @Prop({ required: true, type: String })
  RegistrationNumber: string;

  @Prop()
  TIN: string;

  @Prop({ required: true, type: String })
  NameEn: string;

  @Prop()
  NameBn: string;

  @Prop()
  Email: string;

  @Prop()
  ContactNumber: string;

  @Prop()
  MobileNumber: string;

  @Prop()
  PhoneNumber: string;

  @Prop()
  Fax: string;

  @Prop()
  Website: string;

  @Prop()
  Logo: string;
}

export const BranchSchema = SchemaFactory.createForClass(Branch);
