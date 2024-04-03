import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IdentifiableEntitySchema } from 'src/common/database/mongoose/identifiable-entity.schema';

@Schema()
export class Branch extends IdentifiableEntitySchema {
  @Prop({ required: true, type: String })
  organizationId: string;

  @Prop({ required: true, type: String })
  identificationNumber: string;

  @Prop({ required: true, type: String })
  registrationNumber: string;

  @Prop()
  tin: string;

  @Prop({ required: true, type: String })
  nameEn: string;

  @Prop()
  nameBn: string;

  @Prop()
  email: string;

  @Prop()
  contactNumber: string;

  @Prop()
  mobileNumber: string;

  @Prop()
  phoneNumber: string;

  @Prop()
  fax: string;

  @Prop()
  website: string;

  @Prop()
  logo: string;
}

export const BranchSchema = SchemaFactory.createForClass(Branch);
