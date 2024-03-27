import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Relationship } from 'src/common/enums/relationship.enum';
import { CustomerRequest } from './customer.dto';

export class NomineeRequest extends CustomerRequest {
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
