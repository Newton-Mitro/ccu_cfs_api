import { Prop } from '@nestjs/mongoose';

export class AuthUser {
  @Prop()
  id: string;

  @Prop()
  name: string;

  @Prop()
  username: string;

  @Prop()
  personId: string;
}
