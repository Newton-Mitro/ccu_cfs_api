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
import { AccountType } from 'src/subsidiary-accounting-module/subsidiary-ledgers/core/enum/account-type.enum';
import { Branch } from 'src/subsidiary-accounting-module/subsidiary-ledgers/core/enum/branch.enum';
import { ControlLedger } from 'src/subsidiary-accounting-module/subsidiary-ledgers/core/enum/control-ledger';
import { CollateralDTO } from './collateral.dto';
import { CustomerDTO } from './customer.dto';
import { IntroducerDTO } from './introducer.dto';
import { NomineeDTO } from './nominee.dto';
import { OperatorDTO } from './operator.dto';
import { ScheduleDTO } from './schedule.dto';

export class SubsidiaryLedgerAccountDTO {
  @IsOptional()
  AccountId: string;

  @IsNotEmpty()
  @IsString()
  @IsEnum(AccountType)
  AccountType: AccountType;

  @IsNotEmpty()
  @IsString()
  @IsEnum(ControlLedger)
  ControlLedger: ControlLedger;

  @IsNotEmpty()
  @IsString()
  AccountName: string;

  @IsNotEmpty()
  @IsString()
  @IsEnum(Branch)
  Branch: Branch;

  @IsNumber()
  Duration: number;

  @IsNumber()
  Stock: number;

  @IsNumber()
  InterestRate: number;

  @IsNumber()
  ProtectionSchemePercent: number;

  @IsNumber()
  OpeningAmount: number;

  @IsNumber()
  InstallmentAmount: number;

  @IsNumber()
  NumberOfInstallment: number;

  @Type(() => IntroducerDTO)
  @IsArray()
  @ValidateNested({ each: true })
  Introducers: IntroducerDTO[];

  @Type(() => CustomerDTO)
  @IsArray()
  @ValidateNested({ each: true })
  Holders: CustomerDTO[];

  @Type(() => OperatorDTO)
  @IsArray()
  @ValidateNested({ each: true })
  Operators: OperatorDTO[];

  @Type(() => NomineeDTO)
  @IsArray()
  @ValidateNested({ each: true })
  Nominees: NomineeDTO[];

  @Type(() => CollateralDTO)
  @IsArray()
  @ValidateNested({ each: true })
  Collaterals: CollateralDTO[];

  @Type(() => ScheduleDTO)
  @IsArray()
  @ValidateNested({ each: true })
  Schedules: ScheduleDTO[];

  @IsOptional()
  @IsDateString()
  CreatedAt: string;

  @IsOptional()
  @IsDateString()
  UpdatedAt: string;

  @IsOptional()
  CreatedBy: string;

  @IsOptional()
  UpdatedBy: string;
}
