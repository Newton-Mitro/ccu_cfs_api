import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IdentifiableEntitySchema } from 'src/common/mongoose/identifiable-entity.schema';

@Schema()
export class Training extends IdentifiableEntitySchema {
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
