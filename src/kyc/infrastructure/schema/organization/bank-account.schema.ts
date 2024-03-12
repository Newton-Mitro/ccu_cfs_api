import { Prop, Schema } from '@nestjs/mongoose';

@Schema()
export class BankAccountSchema {
  @Prop({ require: true })
  BankName: string;

  @Prop({ require: true })
  Branch: string;

  @Prop()
  RoutingNumber: string;

  @Prop({ require: true })
  AccountNumber: string;

  @Prop()
  AccountName: string;
}
