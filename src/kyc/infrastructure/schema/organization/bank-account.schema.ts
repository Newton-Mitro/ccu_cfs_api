import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IdentifiableEntitySchema } from 'src/common/mongoose/identifiable-entity.schema';

@Schema()
export class BankAccount extends IdentifiableEntitySchema {
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

export const BankAccountSchema = SchemaFactory.createForClass(BankAccount);
