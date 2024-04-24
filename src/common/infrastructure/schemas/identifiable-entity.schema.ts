import { Prop } from '@nestjs/mongoose';
import { ObjectId } from 'mongodb';
import { AuthUser } from './auth-user.schema';

export abstract class IdentifiableEntitySchema {
  @Prop()
  _id: ObjectId;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;

  @Prop({ type: AuthUser })
  createdBy: AuthUser | null;

  @Prop({ type: AuthUser })
  updatedBy: AuthUser | null;
}
