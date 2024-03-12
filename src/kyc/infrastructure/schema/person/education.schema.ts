import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class EducationSchema {
  @Prop({ require: true })
  EducationLevel: string;

  @Prop({ require: true })
  EducationDegree: string;

  @Prop({ require: true })
  InstituteName: string;

  @Prop()
  MajorSubject: string;

  @Prop({ require: true })
  PassingYear: string;

  @Prop()
  Grade: string;
}
