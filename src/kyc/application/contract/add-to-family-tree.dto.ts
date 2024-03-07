import { Type } from 'class-transformer';
import { IsArray, IsEnum, IsNotEmpty, ValidateNested } from 'class-validator';
import { FamilyTreeStatus } from 'src/kyc/domain/enum/family-tree-status.enum';
import { Relationship } from 'src/kyc/domain/enum/relationship.enum';
import { FamilyAndRelativeDTO } from './family-and-relative.dto';

export class AddToFamilyTreeDTO {
  @Type(() => FamilyAndRelativeDTO)
  @IsArray()
  @ValidateNested({ each: true })
  // @Expose({ name: 'first_person' })
  FirstPerson: FamilyAndRelativeDTO;

  @IsEnum(Relationship)
  @IsNotEmpty()
  // @Expose({ name: 'second_person_relationship_with_first_person' })
  SecondPersonRelationshipWithFirstPerson: Relationship;

  @Type(() => FamilyAndRelativeDTO)
  @IsArray()
  @ValidateNested({ each: true })
  // @Expose({ name: 'second_person' })
  SecondPerson: FamilyAndRelativeDTO;

  @IsEnum(Relationship)
  @IsNotEmpty()
  // @Expose({ name: 'first_person_relationship_with_second_person' })
  FirstPersonRelationshipWithSecondPerson: Relationship;

  @IsEnum(FamilyTreeStatus)
  @IsNotEmpty()
  // @Expose({ name: 'status' })
  Status: FamilyTreeStatus;
}
