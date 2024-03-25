import { PersonModel } from 'src/kyc/domain/models/person/person.aggregate';
import { Address } from '../../contract/common/responses/address';
import { PersonAttachment } from '../../contract/common/responses/person-attachment';
import {
  Education,
  EmploymentHistory,
  FamilyAndRelative,
  PersonResponse,
  Training,
} from '../../contract/person/responses/person.response';

export class PersonModelToResponseMapper {
  static map(model: PersonModel): PersonResponse {
    // TODO: Implement Mapping
    const personResponseModel = new PersonResponse(
      model.PersonId,
      model.IdentificationNumber,
      model.NameEn,
      model.NameBn,
      model.DateOfBirth,
      model.Gender,
      model.BloodGroup,
      model.Religion,
      model.NID,
      model.BirthRegistrationNumber,
      model.MaritalStatus,
      model.ContactNumber,
      model.MobileNumber,
      model.PhoneNumber,
      model.Email,
      model.Profession,
      model.Photo.FileUrl,
    );

    personResponseModel.addresses = model.Addresses?.map((address) => {
      return new Address(
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
      );
    });

    personResponseModel.educations = model.Educations?.map((education) => {
      return new Education(
        education.Id,
        education.EducationLevel,
        education.EducationDegree,
        education.InstituteName,
        education.MajorSubject,
        education.PassingYear,
        education.Grade,
      );
    });

    personResponseModel.trainings = model.Trainings?.map((training) => {
      return new Training(
        training.Id,
        training.CourseTitle,
        training.InstituteName,
        training.CourseContent,
        training.Result,
        training.StartDate,
        training.EndDate,
      );
    });

    personResponseModel.employmentHistories = model.EmploymentHistories?.map(
      (employmentHistory) => {
        return new EmploymentHistory(
          employmentHistory.Id,
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
        );
      },
    );

    personResponseModel.familyTree = model.FamilyTree?.map((familyMember) => {
      return new FamilyAndRelative(
        familyMember.Id,
        familyMember.IdentificationNumber,
        familyMember.NameEn,
        familyMember.NameBn,
        familyMember.DateOfBirth,
        familyMember.Gender,
        familyMember.BloodGroup,
        familyMember.Religion,
        familyMember.NID,
        familyMember.BirthRegistrationNumber,
        familyMember.MaritalStatus,
        familyMember.ContactNumber,
        familyMember.MobileNumber,
        familyMember.PhoneNumber,
        familyMember.Email,
        familyMember.Photo.FileUrl,
        familyMember.Relationship,
        familyMember.Status,
      );
    });

    personResponseModel.attachments = model.Attachments?.map((attachment) => {
      return new PersonAttachment(
        attachment.Id,
        attachment.DocumentTitle,
        attachment.FileUrl,
      );
    });

    return personResponseModel;
  }
}
