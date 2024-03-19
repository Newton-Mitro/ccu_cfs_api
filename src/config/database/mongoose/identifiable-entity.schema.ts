import { Prop } from '@nestjs/mongoose';
import { ObjectId } from 'mongodb';

export abstract class IdentifiableEntitySchema {
  @Prop()
  _id: ObjectId;
}
