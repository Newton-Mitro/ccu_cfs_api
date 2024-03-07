import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Relationship } from 'src/kyc/domain/enum/relationship.enum';
import { CustomerDTO } from './customer.dto';

export class NomineeDTO extends CustomerDTO {
  @IsNotEmpty()
  @IsString()
  @IsEnum(Relationship)
  // @Expose({ name: 'relationship' })
  Relationship: Relationship;

  @IsNotEmpty()
  @IsNumber()
  // @Expose({ name: 'percent' })
  Percent: number;
}
