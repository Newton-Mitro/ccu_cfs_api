import { BloodGroup } from 'src/common/enums/blood-group.enum';
import { Gender } from 'src/common/enums/gender.enum';
import { MaritalStatus } from 'src/common/enums/marital-status.enum';
import { Profession } from 'src/common/enums/profession.enum';
import { Relationship } from 'src/common/enums/relationship.enum';
import { Religion } from 'src/common/enums/religion.enum';
import { FamilyTreeStatus } from 'src/kyc/domain/enums/family-tree-status.enum';
import { Address } from '../../common/responses/address';
import { PersonAttachment } from '../../common/responses/person-attachment';

export class Person {
  constructor(
    readonly person_id: string,
    readonly identification_number: string,
    readonly name_en: string,
    readonly name_bn: string,
    readonly date_of_birth: Date,
    readonly gender: Gender,
    readonly blood_group: BloodGroup,
    readonly religion: Religion,
    readonly nid: string,
    readonly birth_registration_number: string,
    readonly marital_status: MaritalStatus,
    readonly contact_number: string,
    readonly mobile_number: string,
    readonly phone_number: string,
    readonly email: string,
    readonly profession: Profession,
    readonly photo: string,
  ) {}
}

export class PersonResponse extends Person {
  addresses: Address[];
  family_tree: FamilyAndRelative[];
  educations: Education[];
  trainings: Training[];
  employment_histories: EmploymentHistory[];
  attachments: PersonAttachment[];

  constructor(
    readonly person_id: string,
    readonly identification_number: string,
    readonly name_en: string,
    readonly name_bn: string,
    readonly date_of_birth: Date,
    readonly gender: Gender,
    readonly blood_group: BloodGroup,
    readonly religion: Religion,
    readonly nid: string,
    readonly birth_registration_number: string,
    readonly marital_status: MaritalStatus,
    readonly contact_number: string,
    readonly mobile_number: string,
    readonly phone_number: string,
    readonly email: string,
    readonly profession: Profession,
    readonly photo: string,
  ) {
    super(
      person_id,
      identification_number,
      name_en,
      name_bn,
      date_of_birth,
      gender,
      blood_group,
      religion,
      nid,
      birth_registration_number,
      marital_status,
      contact_number,
      mobile_number,
      phone_number,
      email,
      profession,
      photo,
    );
  }
}

export class Education {
  constructor(
    readonly education_id: string,
    readonly education_level: string,
    readonly education_degree: string,
    readonly institute_name: string,
    readonly major_subject: string,
    readonly passing_year: string,
    readonly grade: string,
  ) {}
}

export class EmploymentHistory {
  constructor(
    readonly employment_history_id: string,
    readonly organization_name: string,
    readonly position: string,
    readonly address: string,
    readonly supervisor_name: string,
    readonly supervisor_designation: string,
    readonly supervisor_phone: string,
    readonly job_responsibilities: string,
    readonly salary: number,
    readonly start_date: Date,
    readonly end_date: Date,
    readonly till_now: boolean,
  ) {}
}

export class FamilyAndRelative {
  constructor(
    readonly family_tree_id: string,
    readonly identification_number: string,
    readonly name_en: string,
    readonly name_bn: string,
    readonly date_of_birth: Date,
    readonly gender: Gender,
    readonly blood_group: BloodGroup,
    readonly religion: Religion,
    readonly nid: string,
    readonly birth_registration_number: string,
    readonly marital_status: MaritalStatus,
    readonly contact_number: string,
    readonly mobile_number: string,
    readonly phone_number: string,
    readonly email: string,
    readonly photo: string,
    readonly relationship: Relationship,
    readonly status: FamilyTreeStatus,
  ) {}
}

export class Training {
  constructor(
    readonly training_id: string,
    readonly course_title: string,
    readonly institute_name: string,
    readonly course_content: string,
    readonly result: string,
    readonly start_date: Date,
    readonly end_date: Date,
  ) {}
}
