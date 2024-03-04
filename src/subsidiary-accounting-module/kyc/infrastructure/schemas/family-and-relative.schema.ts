import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types } from 'mongoose';
import { Relationship } from '../../core/enum/relationship.enum';
import { Person } from './person.schema';

@Schema()
export class FamilyAndRelative {
  @Prop({
    require: true,
    type: String,
    enum: Object.values(Relationship),
  })
  relationship: Relationship;

  @Prop({ type: Types.ObjectId, required: true })
  familyAndRelative: string | Types.ObjectId | Person;
}

export const FamilyAndRelativeSchema =
  SchemaFactory.createForClass(FamilyAndRelative);
