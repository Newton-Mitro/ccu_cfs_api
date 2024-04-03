import { BloodGroup } from 'src/common/enums/blood-group.enum';
import { Gender } from 'src/common/enums/gender.enum';
import { MaritalStatus } from 'src/common/enums/marital-status.enum';
import { Profession } from 'src/common/enums/profession.enum';
import { Religion } from 'src/common/enums/religion.enum';
import { AddressDTO } from '../../../../shared/application/contract/dto/address.dto';
import { PersonAttachmentDTO } from '../../../../shared/application/contract/dto/person-attachment.dto';
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
    readonly created_by: string,
    readonly updated_by: string,
    readonly customer_type: string,
  ) {}

  public addresses: AddressDTO[];
  public family_tree: FamilyAndRelativeDTO[];
  public educations: EducationDTO[];
  public trainings: TrainingDTO[];
  public employment_histories: EmploymentHistoryDTO[];
  public attachments: PersonAttachmentDTO[];
}
