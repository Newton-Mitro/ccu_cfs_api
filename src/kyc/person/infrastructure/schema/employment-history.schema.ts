import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IdentifiableEntitySchema } from '../../../../common/schemas/identifiable-entity.schema';

@Schema()
export class EmploymentHistory extends IdentifiableEntitySchema {
  @Prop({ require: true })
  organizationName: string;

  @Prop({ require: true })
  position: string;

  @Prop({ require: true })
  address: string;

  @Prop({ require: true })
  supervisorName: string;

  @Prop({ require: true })
  supervisorDesignation: string;

  @Prop({ require: true })
  supervisorPhone: string;

  @Prop()
  jobResponsibilities: string;

  @Prop()
  salary: number;

  @Prop({ require: true })
  startDate: Date;

  @Prop()
  endDate: Date;

  @Prop()
  tillNow: boolean;
}

export const EmploymentHistorySchema =
  SchemaFactory.createForClass(EmploymentHistory);
