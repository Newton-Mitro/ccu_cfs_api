import { Type } from 'class-transformer';
import {
  IsArray,
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { AccountType } from '../../../../../shared/domain/enums/account-type.enum';
import { Branch } from '../../../../../shared/domain/enums/branch.enum';
import { ControlLedger } from '../../../../../shared/domain/enums/control-ledger';
import { CollateralRequest } from './collateral.dto';
import { CustomerRequest } from './customer.dto';
import { IntroducerRequest } from './introducer.dto';
import { NomineeRequest } from './nominee.dto';
import { OperatorRequest } from './operator.dto';
import { ScheduleRequest } from './schedule.dto';

export class CreateSubsidiaryLedgerRequest {
  @IsNotEmpty()
  @IsString()
  @IsEnum(AccountType)
  // @Expose({ name: 'account_type' })
  AccountType: AccountType;

  @IsNotEmpty()
  @IsString()
  @IsEnum(ControlLedger)
  // @Expose({ name: 'control_ledger' })
  ControlLedger: ControlLedger;

  @IsNotEmpty()
  @IsString()
  // @Expose({ name: 'account_name' })
  AccountName: string;

  @IsNotEmpty()
  @IsString()
  @IsEnum(Branch)
  // @Expose({ name: 'branch' })
  Branch: Branch;

  @IsNumber()
  // @Expose({ name: 'duration' })
  Duration: number;

  @IsNumber()
  // @Expose({ name: 'stock' })
  Stock: number;

  @IsNumber()
  // @Expose({ name: 'interest_rate' })
  InterestRate: number;

  @IsNumber()
  // @Expose({ name: 'protection_scheme_percent' })
  ProtectionSchemePercent: number;

  @IsNumber()
  // @Expose({ name: 'opening_amount' })
  OpeningAmount: number;

  @IsNumber()
  // @Expose({ name: 'installment_amount' })
  InstallmentAmount: number;

  @IsNumber()
  // @Expose({ name: 'number_of_installment' })
  NumberOfInstallment: number;

  @Type(() => IntroducerRequest)
  @IsArray()
  @ValidateNested({ each: true })
  // @Expose({ name: 'introducers' })
  Introducers: IntroducerRequest[];

  @Type(() => CustomerRequest)
  @IsArray()
  @ValidateNested({ each: true })
  // @Expose({ name: 'holders' })
  Holders: CustomerRequest[];

  @Type(() => OperatorRequest)
  @IsArray()
  @ValidateNested({ each: true })
  // @Expose({ name: 'operators' })
  Operators: OperatorRequest[];

  @Type(() => NomineeRequest)
  @IsArray()
  @ValidateNested({ each: true })
  // @Expose({ name: 'nominees' })
  Nominees: NomineeRequest[];

  @Type(() => CollateralRequest)
  @IsArray()
  @ValidateNested({ each: true })
  // @Expose({ name: 'collaterals' })
  Collaterals: CollateralRequest[];

  @Type(() => ScheduleRequest)
  @IsArray()
  @ValidateNested({ each: true })
  // @Expose({ name: 'schedules' })
  Schedules: ScheduleRequest[];

  @IsOptional()
  @IsDateString()
  // @Expose({ name: 'created_at' })
  CreatedAt: string;

  @IsOptional()
  @IsDateString()
  // @Expose({ name: 'updated_at' })
  UpdatedAt: string;

  @IsOptional()
  // @Expose({ name: 'created_by' })
  CreatedBy: string;

  @IsOptional()
  // @Expose({ name: 'updated_by' })
  UpdatedBy: string;
}
