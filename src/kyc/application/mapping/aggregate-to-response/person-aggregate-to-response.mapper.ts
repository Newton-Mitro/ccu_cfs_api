import { PersonAggregate } from 'src/kyc/domain/models/person/person.aggregate';
import { AddressDTO } from '../../contract/common/dto/address.dto';
import { PersonAttachmentDTO } from '../../contract/common/dto/person-attachment.dto';
import { EducationDTO } from '../../contract/person/responses/dto/education.dto';
import { EmploymentHistoryDTO } from '../../contract/person/responses/dto/employment-history.dto';
import { FamilyAndRelativeDTO } from '../../contract/person/responses/dto/family-and-relative.dto';
import { TrainingDTO } from '../../contract/person/responses/dto/training.dto';
import { PersonResponse } from '../../contract/person/responses/person.response';

export class PersonAggregateToResponseMapper {
  static map(model: PersonAggregate): PersonResponse {
    // [x]: Implement Mapping

    const personResponseModel = new PersonResponse(
      model.PersonId,
      model.IdentificationNumber,
      model.NameEn,
      model.NameBn,
      model.ContactNumber,
      model.MobileNumber,
      model.PhoneNumber,
      model.Email,
      model.CustomerType,
      model.DateOfBirth,
      model.Gender,
      model.BloodGroup,
      model.Religion,
      model.MaritalStatus,
      model.Profession,
      model.NID,
      model.BirthRegistrationNumber,
      model.Photo,
      model.CreatedAt.toISOString(),
      model.UpdatedAt.toISOString(),
      model.CreatedBy,
      model.UpdatedBy,
    );

    personResponseModel.addresses = model.Addresses?.map((address) => {
      return new AddressDTO(
        address.AddressId,
        address.AddressType,
        address.AddressLineOne,
        address.AddressLineTwo,
        address.Country,
        address.State,
        address.City,
        address.Division,
        address.District,
        address.SubDistrict,
        address.ZipCode,
        address.CreatedAt.toISOString(),
        address.UpdatedAt.toISOString(),
        address.CreatedBy,
        address.UpdatedBy,
      );
    });

    personResponseModel.educations = model.Educations?.map((education) => {
      return new EducationDTO(
        education.EducationId,
        education.EducationLevel,
        education.EducationDegree,
        education.InstituteName,
        education.MajorSubject,
        education.PassingYear,
        education.Grade,
        education.CreatedAt.toISOString(),
        education.UpdatedAt.toISOString(),
        education.CreatedBy,
        education.UpdatedBy,
      );
    });

    personResponseModel.trainings = model.Trainings?.map((training) => {
      return new TrainingDTO(
        training.TrainingId,
        training.CourseTitle,
        training.InstituteName,
        training.CourseContent,
        training.Result,
        training.StartDate,
        training.EndDate,
        training.CreatedAt.toISOString(),
        training.UpdatedAt.toISOString(),
        training.CreatedBy,
        training.UpdatedBy,
      );
    });

    personResponseModel.employment_histories = model.EmploymentHistories?.map(
      (employmentHistory) => {
        return new EmploymentHistoryDTO(
          employmentHistory.EmploymentHistoryId,
          employmentHistory.OrganizationName,
          employmentHistory.Position,
          employmentHistory.Address,
          employmentHistory.SupervisorName,
          employmentHistory.SupervisorDesignation,
          employmentHistory.SupervisorPhone,
          employmentHistory.JobResponsibilities,
          employmentHistory.Salary,
          employmentHistory.StartDate,
          employmentHistory.EndDate,
          employmentHistory.TillNow,
          employmentHistory.CreatedAt.toISOString(),
          employmentHistory.UpdatedAt.toISOString(),
          employmentHistory.CreatedBy,
          employmentHistory.UpdatedBy,
        );
      },
    );

    personResponseModel.family_tree = model.FamilyTree?.map((familyMember) => {
      return new FamilyAndRelativeDTO(
        familyMember.FamilyTreeId,
        familyMember.PersonId,
        familyMember.IdentificationNumber,
        familyMember.NameEn,
        familyMember.NameBn,
        familyMember.ContactNumber,
        familyMember.MobileNumber,
        familyMember.PhoneNumber,
        familyMember.Email,
        familyMember.CustomerType,
        familyMember.DateOfBirth,
        familyMember.Gender,
        familyMember.BloodGroup,
        familyMember.Religion,
        familyMember.MaritalStatus,
        familyMember.Profession,
        familyMember.NID,
        familyMember.BirthRegistrationNumber,
        familyMember.Photo,
        familyMember.Relationship,
        familyMember.Status,
        familyMember.CreatedAt.toISOString(),
        familyMember.UpdatedAt.toISOString(),
        familyMember.CreatedBy,
        familyMember.UpdatedBy,
      );
    });

    personResponseModel.attachments = model.Attachments?.map((attachment) => {
      return new PersonAttachmentDTO(
        attachment.AttachmentId,
        attachment.DocumentTitle,
        attachment.FileUrl,
        attachment.CreatedAt.toISOString(),
        attachment.UpdatedAt.toISOString(),
        attachment.CreatedBy,
        attachment.UpdatedBy,
      );
    });

    return personResponseModel;
  }
}
