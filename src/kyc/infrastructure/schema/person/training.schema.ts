import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class TrainingSchema {
  @Prop({ require: true })
  CourseTitle: string;

  @Prop()
  InstituteName: string;

  @Prop({ require: true })
  CourseContent: string;

  @Prop()
  Result: string;

  @Prop()
  StartDate: string;

  @Prop()
  EndDate: string;
}
