import { BloodGroup } from '../../../../../common/domain/enums/blood-group.enum';
import { Gender } from '../../../../../common/domain/enums/gender.enum';
import { MaritalStatus } from '../../../../../common/domain/enums/marital-status.enum';
import { Profession } from '../../../../../common/domain/enums/profession.enum';
import { Religion } from '../../../../../common/domain/enums/religion.enum';
import { AuthUserType } from '../../../../../common/domain/types/auth-user.type';
import { AddressDTO } from '../../../../shared/application/contract/responses/dto/address.dto';
import { PersonAttachmentDTO } from '../../../../shared/application/contract/responses/dto/person-attachment.dto';
import { EducationDTO } from './dto/education.dto';
import { EmploymentHistoryDTO } from './dto/employment-history.dto';
import { FamilyAndRelativeDTO } from './dto/family-and-relative.dto';
import { TrainingDTO } from './dto/training.dto';

export class PersonResponse {
  constructor(
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
    readonly created_at: string,
    readonly updated_at: string,
    readonly created_by: AuthUserType | null,
    readonly updated_by: AuthUserType | null,
    readonly customer_type: string,
  ) {}

  public addresses: AddressDTO[];
  public family_tree: FamilyAndRelativeDTO[];
  public educations: EducationDTO[];
  public trainings: TrainingDTO[];
  public employment_histories: EmploymentHistoryDTO[];
  public attachments: PersonAttachmentDTO[];
}
