import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class EmploymentHistory {
  @Prop({ require: true })
  OrganizationName: string;

  @Prop()
  Position: string;

  @Prop({ require: true })
  Address: string;

  @Prop()
  SupervisorName: string;

  @Prop()
  SupervisorDesignation: string;

  @Prop()
  SupervisorPhone: string;

  @Prop()
  JobResponsibilities: string;

  @Prop()
  Salary: string;

  @Prop()
  StartDate: string;

  @Prop()
  EndDate: string;

  @Prop()
  TillNow: string;
}

export const EmploymentHistorySchema =
  SchemaFactory.createForClass(EmploymentHistory);
