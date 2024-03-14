import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IdentifiableEntitySchema } from 'src/common/mongoose/identifiable-entity.schema';

@Schema()
export class Branch extends IdentifiableEntitySchema {
  @Prop({ required: true, type: String })
  OrganizationId: string;

  @Prop({ required: true, type: String })
  IdentificationNumber: string;

  @Prop({ required: true, type: String })
  RegistrationNumber: string;

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
  FaxNumber: string;

  @Prop()
  Website: string;
}

export const BranchSchema = SchemaFactory.createForClass(Branch);
