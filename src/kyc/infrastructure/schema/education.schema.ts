import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Education {
  @Prop({ require: true })
  EducationLevel: string;

  @Prop()
  EducationDegree: string;

  @Prop({ require: true })
  InstituteName: string;

  @Prop()
  MajorSubject: string;

  @Prop()
  PassingYear: string;

  @Prop()
  Grade: string;
}

export const EducationSchema = SchemaFactory.createForClass(Education);
