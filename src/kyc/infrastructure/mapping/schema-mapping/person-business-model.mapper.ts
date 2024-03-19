import { IBusinessModelMapper } from 'src/config/database/mongoose/business-model.mapper';
import { AddressEntity } from 'src/kyc/domain/models/common/address.entity';
import { PhotoAttachmentEntity } from 'src/kyc/domain/models/common/photo-attachment.entity';
import { EducationEntity } from 'src/kyc/domain/models/person/entities/education.entity';
import { EmploymentHistoryEntity } from 'src/kyc/domain/models/person/entities/employment-history.entity';
import { FamilyAndRelativeEntity } from 'src/kyc/domain/models/person/entities/family-and-relative.entity';
import { PersonAttachmentEntity } from 'src/kyc/domain/models/person/entities/person-attachment.entity';
import { TrainingEntity } from 'src/kyc/domain/models/person/entities/training.entity';
import { PersonModel } from 'src/kyc/domain/models/person/person.aggregate';
import { Address } from '../../schema/common/address.schema';
import { Education } from '../../schema/person/education.schema';
import { EmploymentHistory } from '../../schema/person/employment-history.schema';
import { FamilyAndRelative } from '../../schema/person/family-and-relative.schema';
import { PersonAttachment } from '../../schema/person/person-attachment.schema';
import { Person } from '../../schema/person/person.schema';
import { Training } from '../../schema/person/training.schema';

export class PersonBusinessModelMapper
  implements IBusinessModelMapper<Person, PersonModel>
{
  mapSchemaToBusinessModel(entitySchema: Person): PersonModel {
    const personModel = new PersonModel();
    personModel.IdentificationNumber = entitySchema.IdentificationNumber;
    personModel.NameEn = entitySchema.NameEn;
    personModel.NameBn = entitySchema.NameBn;
    personModel.ContactNumber = entitySchema.ContactNumber;
    personModel.PhoneNumber = entitySchema.PhoneNumber;
    personModel.MobileNumber = entitySchema.MobileNumber;
    personModel.Email = entitySchema.Email;

    personModel.DateOfBirth = entitySchema.DateOfBirth;
    personModel.NID = entitySchema.NID;
    personModel.BirthRegistrationNumber = entitySchema.BirthRegistrationNumber;
    personModel.BloodGroup = entitySchema.BloodGroup;
    personModel.Gender = entitySchema.Gender;
    personModel.Religion = entitySchema.Religion;
    personModel.Profession = entitySchema.Profession;
    personModel.MaritalStatus = entitySchema.MaritalStatus;
    personModel.Photo = new PhotoAttachmentEntity(
      entitySchema.Photo._id.toHexString(),
      entitySchema.Photo.DocumentTitle,
      entitySchema.Photo.FileUrl,
    );

    personModel.Addresses = entitySchema.Addresses?.map((address: Address) => {
      return new AddressEntity(
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
      );
    });

    personModel.FamilyTree = entitySchema.FamilyTree?.map(
      (familyAndRelative: FamilyAndRelative) => {
        return new FamilyAndRelativeEntity(
          familyAndRelative._id.toHexString(),
          familyAndRelative.PersonId,
          familyAndRelative.IdentificationNumber,
          familyAndRelative.DateOfBirth.toISOString(),
          familyAndRelative.Gender,
          familyAndRelative.NameEn,
          familyAndRelative.NameBn,
          familyAndRelative.BloodGroup,
          familyAndRelative.Religion,
          familyAndRelative.MaritalStatus,
          familyAndRelative.Profession,
          familyAndRelative.ContactNumber,
          familyAndRelative.Email,
          familyAndRelative.NID,
          familyAndRelative.BirthRegistrationNumber,
          familyAndRelative.Relationship,
          familyAndRelative.Status,
          new PhotoAttachmentEntity(
            familyAndRelative.Photo._id.toHexString(),
            familyAndRelative.Photo.DocumentTitle,
            familyAndRelative.Photo.FileUrl,
          ),
        );
      },
    );

    personModel.Educations = entitySchema.Educations?.map(
      (education: Education) => {
        return new EducationEntity(
          education._id.toHexString(),
          education.EducationLevel,
          education.EducationDegree,
          education.InstituteName,
          education.MajorSubject,
          education.PassingYear,
          education.Grade,
        );
      },
    );

    personModel.Trainings = entitySchema.Trainings?.map(
      (training: Training) => {
        return new TrainingEntity(
          training._id.toHexString(),
          training.CourseTitle,
          training.InstituteName,
          training.CourseContent,
          training.Result,
          training.StartDate,
          training.EndDate,
        );
      },
    );

    personModel.EmploymentHistories = entitySchema.EmploymentHistories?.map(
      (employmentHistory: EmploymentHistory) => {
        return new EmploymentHistoryEntity(
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
        );
      },
    );

    personModel.Attachments = entitySchema.Attachments?.map(
      (personAttachment: PersonAttachment) => {
        return new PersonAttachmentEntity(
          personAttachment._id.toHexString(),
          personAttachment.DocumentTitle,
          personAttachment.FileUrl,
        );
      },
    );

    return personModel;
  }
}
