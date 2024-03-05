import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { CollateralStatus } from '../../domain/enum/collateral-status.enum';
import { CollateralType } from '../../domain/enum/collateral-type.enum';

export class CollateralDTO {
  @IsOptional()
  @IsString()
  Id: string;

  @IsNotEmpty()
  @IsString()
  @IsEnum(CollateralType)
  CollateralType: CollateralType;

  @IsString()
  CollateralTakenFromAccount: string;

  @IsString()
  CollateralGivenToAccount: string;

  @IsNumber()
  CollateralAmount: number;

  @IsNotEmpty()
  @IsString()
  @IsEnum(CollateralStatus)
  CollateralStatus: CollateralStatus;
}
