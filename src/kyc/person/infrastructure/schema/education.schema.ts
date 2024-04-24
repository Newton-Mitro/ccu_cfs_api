import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IdentifiableEntitySchema } from '../../../../common/infrastructure/schemas/identifiable-entity.schema';

@Schema()
export class Education extends IdentifiableEntitySchema {
  @Prop({ require: true })
  educationLevel: string;

  @Prop({ require: true })
  educationDegree: string;

  @Prop({ require: true })
  instituteName: string;

  @Prop()
  majorSubject: string;

  @Prop({ require: true })
  passingYear: string;

  @Prop()
  grade: string;
}

export const EducationSchema = SchemaFactory.createForClass(Education);
