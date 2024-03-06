import { Type } from 'class-transformer';
import { IsArray, IsEnum, IsNotEmpty, ValidateNested } from 'class-validator';
import { Relationship } from 'src/kyc/domain/enum/relationship.enum';
import { FamilyAndRelativeDTO } from './family-and-relative.dto';
import { FamilyTreeStatus } from 'src/kyc/domain/enum/family-tree-status.enum';

export class AddToFamilyTreeDTO {
  @Type(() => FamilyAndRelativeDTO)
  @IsArray()
  @ValidateNested({ each: true })
  firstPerson: FamilyAndRelativeDTO;

  @IsEnum(Relationship)
  @IsNotEmpty()
  secondPersonRelationshipWithFirstPerson: Relationship;

  @Type(() => FamilyAndRelativeDTO)
  @IsArray()
  @ValidateNested({ each: true })
  secondPerson: FamilyAndRelativeDTO;

  @IsEnum(Relationship)
  @IsNotEmpty()
  firstPersonRelationshipWithSecondPerson: Relationship;

  @IsEnum(FamilyTreeStatus)
  @IsNotEmpty()
  status: FamilyTreeStatus;
}
