import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { Relationship } from '../../core/enum/relationship.enum';

export class FamilyAndRelativeDTO {
  @IsString()
  @IsNotEmpty()
  familyAndRelative: string;

  @IsEnum(Relationship)
  @IsNotEmpty()
  relationship: Relationship;
}
