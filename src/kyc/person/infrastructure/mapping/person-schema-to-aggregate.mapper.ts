import { IAggregateModelMapper } from '../../../../common/database/mongoose/aggregate-model.mapper';
import { Address } from '../../../shared/infrastructure/schema/address.schema';
import { PersonAggregate } from '../../domain/models/person.aggregate';
import { Education } from '../schema/education.schema';
import { EmploymentHistory } from '../schema/employment-history.schema';
import { FamilyAndRelative } from '../schema/family-and-relative.schema';
import { PersonAttachment } from '../schema/person-attachment.schema';
import { Person } from '../schema/person.schema';
import { Training } from '../schema/training.schema';

export class PersonSchemaToAggregateMapper
  implements IAggregateModelMapper<Person, PersonAggregate>
{
  mapSchemaToAggregate(entitySchema: Person): PersonAggregate {
    const addresses = entitySchema.addresses?.map((address: Address) => {
      return {
        addressId: address._id.toHexString(),
        addressType: address.addressType,
        addressLineOne: address.addressLineOne,
        addressLineTwo: address.addressLineTwo,
        country: address.country,
        state: address.state,
        city: address.city,
        division: address.division,
        district: address.district,
        subDistrict: address.subDistrict,
        zipCode: address.zipCode,
        createdAt: address.createdAt,
        updatedAt: address.updatedAt,
        createdBy: address.createdBy,
        updatedBy: address.updatedBy,
      };
    });

    const familyTree = entitySchema.familyTree?.map(
      (familyAndRelative: FamilyAndRelative) => {
        return {
          familyTreeId: familyAndRelative._id.toHexString(),
          personId: familyAndRelative.personId,
          identificationNumber: familyAndRelative.identificationNumber,
          nameEn: familyAndRelative.nameEn,
          nameBn: familyAndRelative.nameBn,
          contactNumber: familyAndRelative.contactNumber,
          mobileNumber: familyAndRelative.mobileNumber,
          phoneNumber: familyAndRelative.phoneNumber,
          email: familyAndRelative.email,
          dateOfBirth: familyAndRelative.dateOfBirth,
          gender: familyAndRelative.gender,
          bloodGroup: familyAndRelative.bloodGroup,
          religion: familyAndRelative.religion,
          maritalStatus: familyAndRelative.maritalStatus,
          profession: familyAndRelative.profession,
          nid: familyAndRelative.nid,
          birthRegistrationNumber: familyAndRelative.birthRegistrationNumber,
          photo: familyAndRelative.photo,
          relationship: familyAndRelative.relationship,
          status: familyAndRelative.status,
          createdAt: familyAndRelative.createdAt,
          updatedAt: familyAndRelative.updatedAt,
          createdBy: familyAndRelative.createdBy,
          updatedBy: familyAndRelative.updatedBy,
          customerType: 'Person',
        };
      },
    );

    const educations = entitySchema.educations?.map((education: Education) => {
      return {
        educationId: education._id.toHexString(),
        educationLevel: education.educationLevel,
        educationDegree: education.educationDegree,
        instituteName: education.instituteName,
        majorSubject: education.majorSubject,
        passingYear: education.passingYear,
        grade: education.grade,
        createdAt: education.createdAt,
        updatedAt: education.updatedAt,
        createdBy: education.createdBy,
        updatedBy: education.updatedBy,
      };
    });

    const trainings = entitySchema.trainings?.map((training: Training) => {
      return {
        trainingId: training._id.toHexString(),
        courseTitle: training.courseTitle,
        instituteName: training.instituteName,
        courseContent: training.courseContent,
        result: training.result,
        startDate: training.startDate,
        endDate: training.endDate,
        createdAt: training.createdAt,
        updatedAt: training.updatedAt,
        createdBy: training.createdBy,
        updatedBy: training.updatedBy,
      };
    });

    const employmentHistories = entitySchema.employmentHistories?.map(
      (employmentHistory: EmploymentHistory) => {
        return {
          employmentHistoryId: employmentHistory._id.toHexString(),
          organizationName: employmentHistory.organizationName,
          position: employmentHistory.position,
          address: employmentHistory.address,
          supervisorName: employmentHistory.supervisorName,
          supervisorDesignation: employmentHistory.supervisorDesignation,
          supervisorPhone: employmentHistory.supervisorPhone,
          jobResponsibilities: employmentHistory.jobResponsibilities,
          salary: employmentHistory.salary,
          startDate: employmentHistory.startDate,
          endDate: employmentHistory.endDate,
          tillNow: employmentHistory.tillNow,
          createdAt: employmentHistory.createdAt,
          updatedAt: employmentHistory.updatedAt,
          createdBy: employmentHistory.createdBy,
          updatedBy: employmentHistory.updatedBy,
        };
      },
    );

    const attachments = entitySchema.attachments?.map(
      (personAttachment: PersonAttachment) => {
        return {
          attachmentId: personAttachment._id.toHexString(),
          documentTitle: personAttachment.documentTitle,
          fileUrl: personAttachment.fileUrl,
          createdAt: personAttachment.createdAt,
          updatedAt: personAttachment.updatedAt,
          createdBy: personAttachment.createdBy,
          updatedBy: personAttachment.updatedBy,
        };
      },
    );

    const personModel = new PersonAggregate();
    personModel.personInit({
      personId: entitySchema._id.toHexString(),
      identificationNumber: entitySchema.identificationNumber,
      nameEn: entitySchema.nameEn,
      nameBn: entitySchema.nameBn,
      customerType: entitySchema['customerType'],
      contactNumber: entitySchema.contactNumber,
      mobileNumber: entitySchema.mobileNumber,
      phoneNumber: entitySchema.phoneNumber,
      email: entitySchema.email,
      dateOfBirth: entitySchema.dateOfBirth,
      gender: entitySchema.gender,
      bloodGroup: entitySchema.bloodGroup,
      religion: entitySchema.religion,
      maritalStatus: entitySchema.maritalStatus,
      profession: entitySchema.profession,
      nid: entitySchema.nid,
      birthRegistrationNumber: entitySchema.birthRegistrationNumber,
      photo: entitySchema.photo,
      createdAt: entitySchema.createdAt,
      updatedAt: entitySchema.updatedAt,
      createdBy: entitySchema.createdBy,
      updatedBy: entitySchema.updatedBy,
      addresses: addresses,
      familyTree: familyTree,
      educations: educations,
      trainings: trainings,
      employmentHistories: employmentHistories,
      attachments: attachments,
    });

    return personModel;
  }
}
