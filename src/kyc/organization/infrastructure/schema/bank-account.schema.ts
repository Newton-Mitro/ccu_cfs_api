import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IdentifiableEntitySchema } from 'src/common/database/mongoose/identifiable-entity.schema';

@Schema()
export class BankAccount extends IdentifiableEntitySchema {
  @Prop({ require: true })
  bankName: string;

  @Prop({ require: true })
  branch: string;

  @Prop()
  routingNumber: string;

  @Prop({ require: true })
  accountNumber: string;

  @Prop()
  accountName: string;
}

export const BankAccountSchema = SchemaFactory.createForClass(BankAccount);
