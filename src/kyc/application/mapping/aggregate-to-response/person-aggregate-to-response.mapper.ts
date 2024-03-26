import { PersonAggregate } from 'src/kyc/domain/models/person/person.aggregate';
import { AddressDTO } from '../../contract/common/dto/address.dto';
import { PersonAttachmentDTO } from '../../contract/common/dto/person-attachment.dto';
import { EducationDTO } from '../../contract/person/responses/dto/education.dto';
import { EmploymentHistoryDTO } from '../../contract/person/responses/dto/employment-history.dto';
import { FamilyAndRelativeDTO } from '../../contract/person/responses/dto/family-and-relative.dto';
import { PersonDTO } from '../../contract/person/responses/dto/person.dto';
import { TrainingDTO } from '../../contract/person/responses/dto/training.dto';
import { PersonResponse } from '../../contract/person/responses/person.response';

export class PersonAggregateToResponseMapper {
  static map(model: PersonAggregate): PersonResponse {
    // [x]: Implement Mapping

    const person = new PersonDTO(
      model.Person.PersonId,
      model.Person.IdentificationNumber,
      model.Person.NameEn,
      model.Person.NameBn,
      model.Person.ContactNumber,
      model.Person.MobileNumber,
      model.Person.PhoneNumber,
      model.Person.Email,
      model.Person.CustomerType,
      model.Person.DateOfBirth,
      model.Person.Gender,
      model.Person.BloodGroup,
      model.Person.Religion,
      model.Person.MaritalStatus,
      model.Person.Profession,
      model.Person.NID,
      model.Person.BirthRegistrationNumber,
      model.Person.Photo,
      model.Person.CreatedAt.toISOString(),
      model.Person.UpdatedAt.toISOString(),
      model.Person.CreatedBy,
      model.Person.UpdatedBy,
    );

    const addresses = model.Addresses?.map((address) => {
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

    const educations = model.Educations?.map((education) => {
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

    const trainings = model.Trainings?.map((training) => {
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

    const employment_histories = model.EmploymentHistories?.map(
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

    const family_tree = model.FamilyTree?.map((familyMember) => {
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

    const attachments = model.Attachments?.map((attachment) => {
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

    const personResponseModel = new PersonResponse(
      person,
      addresses,
      family_tree,
      educations,
      trainings,
      employment_histories,
      attachments,
    );

    return personResponseModel;
  }
}
