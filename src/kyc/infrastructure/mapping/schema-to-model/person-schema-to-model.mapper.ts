import { IBusinessModelMapper } from 'src/common/database/mongoose/business-model.mapper';
import { PersonAggregate } from 'src/kyc/domain/models/person/person.aggregate';
import { Address } from '../../schema/common/address.schema';
import { Education } from '../../schema/person/education.schema';
import { EmploymentHistory } from '../../schema/person/employment-history.schema';
import { FamilyAndRelative } from '../../schema/person/family-and-relative.schema';
import { PersonAttachment } from '../../schema/person/person-attachment.schema';
import { Person } from '../../schema/person/person.schema';
import { Training } from '../../schema/person/training.schema';

export class PersonSchemaToModelMapper
  implements IBusinessModelMapper<Person, PersonAggregate>
{
  mapSchemaToBusinessModel(entitySchema: Person): PersonAggregate {
    const personModel = new PersonAggregate();
    personModel.addPerson(
      entitySchema._id.toHexString(),
      entitySchema.IdentificationNumber,
      entitySchema.NameEn,
      entitySchema.NameBn,
      entitySchema.ContactNumber,
      entitySchema.MobileNumber,
      entitySchema.PhoneNumber,
      entitySchema.Email,
      'Person',
      entitySchema.DateOfBirth,
      entitySchema.Gender,
      entitySchema.BloodGroup,
      entitySchema.Religion,
      entitySchema.MaritalStatus,
      entitySchema.Profession,
      entitySchema.NID,
      entitySchema.BirthRegistrationNumber,
      entitySchema.Photo,
      entitySchema.CreatedAt,
      entitySchema.UpdatedAt,
      entitySchema.CreatedBy,
      entitySchema.UpdatedBy,
    );

    entitySchema.Addresses?.map((address: Address) => {
      personModel.addAddress(
        address._id.toHexString(),
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
        address.CreatedAt,
        address.UpdatedAt,
        address.CreatedBy,
        address.UpdatedBy,
      );
    });

    entitySchema.FamilyTree?.map((familyAndRelative: FamilyAndRelative) => {
      personModel.addToFamilyTree(
        familyAndRelative._id.toHexString(),
        familyAndRelative.PersonId,
        familyAndRelative.IdentificationNumber,
        familyAndRelative.NameEn,
        familyAndRelative.NameBn,
        familyAndRelative.ContactNumber,
        familyAndRelative.MobileNumber,
        familyAndRelative.PhoneNumber,
        familyAndRelative.Email,
        'Person',
        familyAndRelative.DateOfBirth,
        familyAndRelative.Gender,
        familyAndRelative.BloodGroup,
        familyAndRelative.Religion,
        familyAndRelative.MaritalStatus,
        familyAndRelative.Profession,
        familyAndRelative.NID,
        familyAndRelative.BirthRegistrationNumber,
        familyAndRelative.Photo,
        familyAndRelative.Relationship,
        familyAndRelative.Status,
        familyAndRelative.CreatedAt,
        familyAndRelative.UpdatedAt,
        familyAndRelative.CreatedBy,
        familyAndRelative.UpdatedBy,
      );
    });

    entitySchema.Educations?.map((education: Education) => {
      personModel.addEducation(
        education._id.toHexString(),
        education.EducationLevel,
        education.EducationDegree,
        education.InstituteName,
        education.MajorSubject,
        education.PassingYear,
        education.Grade,
        education.CreatedAt,
        education.UpdatedAt,
        education.CreatedBy,
        education.UpdatedBy,
      );
    });

    entitySchema.Trainings?.map((training: Training) => {
      personModel.addTraining(
        training._id.toHexString(),
        training.CourseTitle,
        training.InstituteName,
        training.CourseContent,
        training.Result,
        training.StartDate,
        training.EndDate,
        training.CreatedAt,
        training.UpdatedAt,
        training.CreatedBy,
        training.UpdatedBy,
      );
    });

    entitySchema.EmploymentHistories?.map(
      (employmentHistory: EmploymentHistory) => {
        personModel.addEmploymentHistory(
          employmentHistory._id.toHexString(),
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
          employmentHistory.CreatedAt,
          employmentHistory.UpdatedAt,
          employmentHistory.CreatedBy,
          employmentHistory.UpdatedBy,
        );
      },
    );

    entitySchema.Attachments?.map((personAttachment: PersonAttachment) => {
      personModel.addAttachment(
        personAttachment._id.toHexString(),
        personAttachment.DocumentTitle,
        personAttachment.FileUrl,
        personAttachment.CreatedAt,
        personAttachment.UpdatedAt,
        personAttachment.CreatedBy,
        personAttachment.UpdatedBy,
      );
    });

    return personModel;
  }
}
