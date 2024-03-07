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
import { AccountType } from '../../domain/enum/account-type.enum';
import { Branch } from '../../domain/enum/branch.enum';
import { ControlLedger } from '../../domain/enum/control-ledger';
import { CollateralDTO } from './collateral.dto';
import { CustomerDTO } from './customer.dto';
import { IntroducerDTO } from './introducer.dto';
import { NomineeDTO } from './nominee.dto';
import { OperatorDTO } from './operator.dto';
import { ScheduleDTO } from './schedule.dto';

export class CreateSubsidiaryLedgerDTO {
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

  @Type(() => IntroducerDTO)
  @IsArray()
  @ValidateNested({ each: true })
  // @Expose({ name: 'introducers' })
  Introducers: IntroducerDTO[];

  @Type(() => CustomerDTO)
  @IsArray()
  @ValidateNested({ each: true })
  // @Expose({ name: 'holders' })
  Holders: CustomerDTO[];

  @Type(() => OperatorDTO)
  @IsArray()
  @ValidateNested({ each: true })
  // @Expose({ name: 'operators' })
  Operators: OperatorDTO[];

  @Type(() => NomineeDTO)
  @IsArray()
  @ValidateNested({ each: true })
  // @Expose({ name: 'nominees' })
  Nominees: NomineeDTO[];

  @Type(() => CollateralDTO)
  @IsArray()
  @ValidateNested({ each: true })
  // @Expose({ name: 'collaterals' })
  Collaterals: CollateralDTO[];

  @Type(() => ScheduleDTO)
  @IsArray()
  @ValidateNested({ each: true })
  // @Expose({ name: 'schedules' })
  Schedules: ScheduleDTO[];

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
