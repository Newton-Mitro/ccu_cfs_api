import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Relationship } from 'src/subsidiary-accounting-module/kyc/core/enum/relationship.enum';
import { CustomerDTO } from './customer.dto';

export class NomineeDTO extends CustomerDTO {
  @IsNotEmpty()
  @IsString()
  @IsEnum(Relationship)
  Relationship: Relationship;

  @IsNotEmpty()
  @IsNumber()
  Percent: number;
}
