import { AddressDTO } from '../../common/dto/address.dto';
import { PersonAttachmentDTO } from '../../common/dto/person-attachment.dto';
import { EducationDTO } from './dto/education.dto';
import { EmploymentHistoryDTO } from './dto/employment-history.dto';
import { FamilyAndRelativeDTO } from './dto/family-and-relative.dto';
import { PersonDTO } from './dto/person.dto';
import { TrainingDTO } from './dto/training.dto';

export class PersonResponse {
  constructor(
    readonly person: PersonDTO,
    readonly addresses: AddressDTO[],
    readonly family_tree: FamilyAndRelativeDTO[],
    readonly educations: EducationDTO[],
    readonly trainings: TrainingDTO[],
    readonly employment_histories: EmploymentHistoryDTO[],
    readonly attachments: PersonAttachmentDTO[],
  ) {}
}
