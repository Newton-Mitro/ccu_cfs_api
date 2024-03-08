import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Training {
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

export const TrainingSchema = SchemaFactory.createForClass(Training);
