import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IdentifiableEntitySchema } from '../../../../common/infrastructure/schemas/identifiable-entity.schema';

@Schema()
export class Training extends IdentifiableEntitySchema {
  @Prop({ require: true })
  courseTitle: string;

  @Prop()
  instituteName: string;

  @Prop({ require: true })
  courseContent: string;

  @Prop()
  result: string;

  @Prop()
  startDate: Date;

  @Prop()
  endDate: Date;
}

export const TrainingSchema = SchemaFactory.createForClass(Training);
