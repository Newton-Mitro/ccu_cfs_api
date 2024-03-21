import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({
  collection: 'Users',
  versionKey: false,
  timestamps: true,
})
export class User {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true, type: Array(String) })
  roles: string[];

  @Prop({ type: Array(String) })
  permissions: string[];

  @Prop()
  refreshToken: string;

  @Prop({ required: true, type: String, unique: true })
  userSecret: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
