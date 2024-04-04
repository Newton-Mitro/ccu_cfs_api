import { AddressDTO } from '../../../shared/application/contract/responses/dto/address.dto';
import { PersonAttachmentDTO } from '../../../shared/application/contract/responses/dto/person-attachment.dto';
import { PersonAggregate } from '../../domain/models/person.aggregate';
import { EducationDTO } from '../contract/responses/dto/education.dto';
import { EmploymentHistoryDTO } from '../contract/responses/dto/employment-history.dto';
import { FamilyAndRelativeDTO } from '../contract/responses/dto/family-and-relative.dto';
import { TrainingDTO } from '../contract/responses/dto/training.dto';
import { PersonResponse } from '../contract/responses/person.response';

export class PersonAggregateToResponseMapper {
  public mapAggregateToResponse(model: PersonAggregate): PersonResponse {
    // [x]: Implement Mapping

    const personResponseModel = new PersonResponse(
      model.personId,
      model.identificationNumber,
      model.nameEn,
      model.nameBn,
      model.contactNumber,
      model.mobileNumber,
      model.phoneNumber,
      model.email,
      model.dateOfBirth?.toISOString(),
      model.gender,
      model.bloodGroup,
      model.religion,
      model.maritalStatus,
      model.profession,
      model.nid,
      model.birthRegistrationNumber,
      model.photo,
      model.createdAt?.toISOString(),
      model.updatedAt?.toISOString(),
      model.createdBy,
      model.updatedBy,
      model.customerType,
    );

    personResponseModel.addresses = model.addresses?.map((address) => {
      return new AddressDTO(
        address.addressId,
        address.addressType,
        address.addressLineOne,
        address.addressLineTwo,
        address.country,
        address.state,
        address.city,
        address.division,
        address.district,
        address.subDistrict,
        address.zipCode,
        address.createdAt?.toISOString(),
        address.updatedAt?.toISOString(),
        address.createdBy,
        address.updatedBy,
      );
    });

    personResponseModel.educations = model.educations?.map((education) => {
      return new EducationDTO(
        education.educationId,
        education.educationLevel,
        education.educationDegree,
        education.instituteName,
        education.majorSubject,
        education.passingYear,
        education.grade,
        education.createdAt?.toISOString(),
        education.updatedAt?.toISOString(),
        education.createdBy,
        education.updatedBy,
      );
    });

    personResponseModel.trainings = model.trainings?.map((training) => {
      return new TrainingDTO(
        training.trainingId,
        training.courseTitle,
        training.instituteName,
        training.courseContent,
        training.result,
        training.startDate,
        training.endDate,
        training.createdAt?.toISOString(),
        training.updatedAt?.toISOString(),
        training.createdBy,
        training.updatedBy,
      );
    });

    personResponseModel.employment_histories = model.employmentHistories?.map(
      (employmentHistory) => {
        return new EmploymentHistoryDTO(
          employmentHistory.employmentHistoryId,
          employmentHistory.organizationName,
          employmentHistory.position,
          employmentHistory.address,
          employmentHistory.supervisorName,
          employmentHistory.supervisorDesignation,
          employmentHistory.supervisorPhone,
          employmentHistory.jobResponsibilities,
          employmentHistory.salary,
          employmentHistory.startDate,
          employmentHistory.endDate,
          employmentHistory.tillNow,
          employmentHistory.createdAt?.toISOString(),
          employmentHistory.updatedAt?.toISOString(),
          employmentHistory.createdBy,
          employmentHistory.updatedBy,
        );
      },
    );

    personResponseModel.family_tree = model.familyTree?.map((familyMember) => {
      return new FamilyAndRelativeDTO(
        familyMember.familyTreeId,
        familyMember.personId,
        familyMember.identificationNumber,
        familyMember.nameEn,
        familyMember.nameBn,
        familyMember.contactNumber,
        familyMember.mobileNumber,
        familyMember.phoneNumber,
        familyMember.email,
        familyMember.dateOfBirth?.toISOString(),
        familyMember.gender,
        familyMember.bloodGroup,
        familyMember.religion,
        familyMember.maritalStatus,
        familyMember.profession,
        familyMember.nid,
        familyMember.birthRegistrationNumber,
        familyMember.photo,
        familyMember.relationship,
        familyMember.status,
        familyMember.createdAt?.toISOString(),
        familyMember.updatedAt?.toISOString(),
        familyMember.createdBy,
        familyMember.updatedBy,
      );
    });

    personResponseModel.attachments = model.attachments?.map((attachment) => {
      return new PersonAttachmentDTO(
        attachment.attachmentId,
        attachment.documentTitle,
        attachment.fileUrl,
        attachment.createdAt?.toISOString(),
        attachment.updatedAt?.toISOString(),
        attachment.createdBy,
        attachment.updatedBy,
      );
    });

    return personResponseModel;
  }
}
