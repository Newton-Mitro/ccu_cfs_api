import { LinkObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface';
import { BloodGroup } from '../../../../../../common/domain/enums/blood-group.enum';
import { Gender } from '../../../../../../common/domain/enums/gender.enum';
import { MaritalStatus } from '../../../../../../common/domain/enums/marital-status.enum';
import { Profession } from '../../../../../../common/domain/enums/profession.enum';
import { Relationship } from '../../../../../../common/domain/enums/relationship.enum';
import { Religion } from '../../../../../../common/domain/enums/religion.enum';
import { AuthUserType } from '../../../../../../common/domain/types/auth-user.type';
import { FamilyTreeStatus } from '../../../../domain/enums/family-tree-status.enum';

export class FamilyAndRelativeDTO {
  constructor(
    readonly family_tree_id: string,
    readonly person_id: string,
    readonly identification_number: string,
    readonly name_en: string,
    readonly name_bn: string,
    readonly contact_number: string,
    readonly mobile_number: string,
    readonly phone_number: string,
    readonly email: string,
    readonly date_of_birth: string,
    readonly gender: Gender,
    readonly blood_group: BloodGroup,
    readonly religion: Religion,
    readonly marital_status: MaritalStatus,
    readonly profession: Profession,
    readonly nid: string,
    readonly birth_registration_number: string,
    readonly photo: string,
    readonly relationship: Relationship,
    readonly status: FamilyTreeStatus,
    readonly created_at: string,
    readonly updated_at: string,
    readonly created_by: AuthUserType | null,
    readonly updated_by: AuthUserType | null,
    readonly links?: LinkObject[],
  ) {}
}
