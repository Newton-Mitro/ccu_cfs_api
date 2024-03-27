import { Prop } from '@nestjs/mongoose';
import { ObjectId } from 'mongodb';

export abstract class IdentifiableEntitySchema {
  @Prop()
  _id: ObjectId;

  @Prop()
  CreatedAt: Date;

  @Prop()
  UpdatedAt: Date;

  @Prop()
  CreatedBy: string;

  @Prop()
  UpdatedBy: string;
}
