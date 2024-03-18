import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { CollateralStatus } from '../../domain/enum/collateral-status.enum';
import { CollateralType } from '../../domain/enum/collateral-type.enum';

export class CollateralRequest {
  @IsOptional()
  @IsString()
  // @Expose({ name: 'id' })
  Id: string;

  @IsNotEmpty()
  @IsString()
  @IsEnum(CollateralType)
  // @Expose({ name: 'collateral_type' })
  CollateralType: CollateralType;

  @IsString()
  // @Expose({ name: 'collateral_taken_from_account' })
  CollateralTakenFromAccount: string;

  @IsString()
  // @Expose({ name: 'collateral_given_to_account' })
  CollateralGivenToAccount: string;

  @IsNumber()
  // @Expose({ name: 'collateral_amount' })
  CollateralAmount: number;

  @IsNotEmpty()
  @IsString()
  @IsEnum(CollateralStatus)
  // @Expose({ name: 'collateral_status' })
  CollateralStatus: CollateralStatus;
}
