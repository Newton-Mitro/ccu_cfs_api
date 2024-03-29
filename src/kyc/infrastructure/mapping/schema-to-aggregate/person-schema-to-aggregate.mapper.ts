import { IBusinessModelMapper } from 'src/common/database/mongoose/business-model.mapper';
import { PersonAggregate } from '../../../domain/models/person/person.aggregate';
import { Address } from '../../schema/common/address.schema';
import { Education } from '../../schema/person/education.schema';
import { EmploymentHistory } from '../../schema/person/employment-history.schema';
import { FamilyAndRelative } from '../../schema/person/family-and-relative.schema';
import { PersonAttachment } from '../../schema/person/person-attachment.schema';
import { Person } from '../../schema/person/person.schema';
import { Training } from '../../schema/person/training.schema';

export class PersonSchemaToAggregateMapper
  implements IBusinessModelMapper<Person, PersonAggregate>
{
  mapSchemaToAggregate(entitySchema: Person): PersonAggregate {
    const personModel = new PersonAggregate({
      personId: entitySchema._id.toHexString(),
      identificationNumber: entitySchema.identificationNumber,
      nameEn: entitySchema.nameEn,
      nameBn: entitySchema.nameBn,
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
    });

    entitySchema.addresses?.map((address: Address) => {
      personModel.addAddress({
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
      });
    });

    entitySchema.familyTree?.map((familyAndRelative: FamilyAndRelative) => {
      personModel.addToFamilyTree({
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
      });
    });

    entitySchema.educations?.map((education: Education) => {
      personModel.addEducation({
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
      });
    });

    entitySchema.trainings?.map((training: Training) => {
      personModel.addTraining({
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
      });
    });

    entitySchema.employmentHistories?.map(
      (employmentHistory: EmploymentHistory) => {
        personModel.addEmploymentHistory({
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
        });
      },
    );

    entitySchema.attachments?.map((personAttachment: PersonAttachment) => {
      personModel.addAttachment({
        attachmentId: personAttachment._id.toHexString(),
        documentTitle: personAttachment.documentTitle,
        fileUrl: personAttachment.fileUrl,
        createdAt: personAttachment.createdAt,
        updatedAt: personAttachment.updatedAt,
        createdBy: personAttachment.createdBy,
        updatedBy: personAttachment.updatedBy,
      });
    });

    return personModel;
  }
}
