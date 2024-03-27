import { Types } from 'mongoose';
import { ISchemaMapper } from 'src/common/database/mongoose/schema.mapper';
import { AddressModel } from 'src/kyc/domain/models/common/address.model';
import { EducationModel } from 'src/kyc/domain/models/person/models/education.model';
import { EmploymentHistoryModel } from 'src/kyc/domain/models/person/models/employment-history.model';
import { FamilyAndRelativeModel } from 'src/kyc/domain/models/person/models/family-and-relative.model';
import { PersonAttachmentModel } from 'src/kyc/domain/models/person/models/person-attachment.model';
import { TrainingModel } from 'src/kyc/domain/models/person/models/training.model';
import { PersonAggregate } from 'src/kyc/domain/models/person/person.aggregate';
import { Person } from '../../schema/person/person.schema';

export class PersonModelToSchemaMapper
  implements ISchemaMapper<Person, PersonAggregate>
{
  mapBusinessModelToSchema(model: PersonAggregate): Person {
    const personSchema = new Person();
    personSchema._id = new Types.ObjectId(model.PersonId);
    personSchema.IdentificationNumber = model.IdentificationNumber;
    personSchema.NameEn = model.NameEn;
    personSchema.NameBn = model.NameBn;
    personSchema.ContactNumber = model.ContactNumber;
    personSchema.PhoneNumber = model.PhoneNumber;
    personSchema.MobileNumber = model.MobileNumber;
    personSchema.Email = model.Email;
    personSchema.DateOfBirth = model.DateOfBirth;
    personSchema.NID = model.NID;
    personSchema.BirthRegistrationNumber = model.BirthRegistrationNumber;
    personSchema.BloodGroup = model.BloodGroup;
    personSchema.Gender = model.Gender;
    personSchema.Religion = model.Religion;
    personSchema.Profession = model.Profession;
    personSchema.MaritalStatus = model.MaritalStatus;
    personSchema.Photo = model.Photo;
    personSchema.CreatedAt = model.CreatedAt;
    personSchema.UpdatedAt = model.UpdatedAt;
    personSchema.CreatedBy = model.CreatedBy;
    personSchema.UpdatedBy = model.UpdatedBy;

    personSchema.Addresses = model.Addresses?.map((address: AddressModel) => ({
      _id: new Types.ObjectId(address.AddressId),
      AddressType: address.AddressType,
      AddressLineOne: address.AddressLineOne,
      AddressLineTwo: address.AddressLineTwo,
      Country: address.Country,
      State: address.State,
      City: address.City,
      Division: address.Division,
      District: address.District,
      SubDistrict: address.SubDistrict,
      ZipCode: address.ZipCode,
      CreatedAt: address.CreatedAt,
      UpdatedAt: address.UpdatedAt,
      CreatedBy: address.CreatedBy,
      UpdatedBy: address.UpdatedBy,
    }));

    personSchema.FamilyTree = model.FamilyTree?.map(
      (familyAndRelative: FamilyAndRelativeModel) => ({
        _id: new Types.ObjectId(familyAndRelative.FamilyTreeId),
        PersonId: familyAndRelative.PersonId,
        IdentificationNumber: familyAndRelative.IdentificationNumber,
        DateOfBirth: new Date(familyAndRelative.DateOfBirth),
        Gender: familyAndRelative.Gender,
        NameEn: familyAndRelative.NameEn,
        NameBn: familyAndRelative.NameBn,
        BloodGroup: familyAndRelative.BloodGroup,
        Religion: familyAndRelative.Religion,
        MaritalStatus: familyAndRelative.MaritalStatus,
        Profession: familyAndRelative.Profession,
        ContactNumber: familyAndRelative.ContactNumber,
        MobileNumber: familyAndRelative.MobileNumber,
        PhoneNumber: familyAndRelative.PhoneNumber,
        Email: familyAndRelative.Email,
        NID: familyAndRelative.NID,
        BirthRegistrationNumber: familyAndRelative.BirthRegistrationNumber,
        Relationship: familyAndRelative.Relationship,
        Status: familyAndRelative.Status,
        Photo: familyAndRelative.Photo,
        CreatedAt: familyAndRelative.CreatedAt,
        UpdatedAt: familyAndRelative.UpdatedAt,
        CreatedBy: familyAndRelative.CreatedBy,
        UpdatedBy: familyAndRelative.UpdatedBy,
      }),
    );

    personSchema.Educations = model.Educations?.map(
      (education: EducationModel) => ({
        _id: new Types.ObjectId(education.EducationId),
        EducationLevel: education.EducationLevel,
        EducationDegree: education.EducationDegree,
        InstituteName: education.InstituteName,
        MajorSubject: education.MajorSubject,
        PassingYear: education.PassingYear,
        Grade: education.Grade,
        CreatedAt: education.CreatedAt,
        UpdatedAt: education.UpdatedAt,
        CreatedBy: education.CreatedBy,
        UpdatedBy: education.UpdatedBy,
      }),
    );

    personSchema.Trainings = model.Trainings?.map(
      (training: TrainingModel) => ({
        _id: new Types.ObjectId(training.TrainingId),
        CourseTitle: training.CourseTitle,
        InstituteName: training.InstituteName,
        CourseContent: training.CourseContent,
        Result: training.Result,
        StartDate: training.StartDate,
        EndDate: training.EndDate,
        CreatedAt: training.CreatedAt,
        UpdatedAt: training.UpdatedAt,
        CreatedBy: training.CreatedBy,
        UpdatedBy: training.UpdatedBy,
      }),
    );

    personSchema.EmploymentHistories = model.EmploymentHistories?.map(
      (employmentHistory: EmploymentHistoryModel) => ({
        _id: new Types.ObjectId(employmentHistory.EmploymentHistoryId),
        OrganizationName: employmentHistory.OrganizationName,
        Position: employmentHistory.Position,
        Address: employmentHistory.Address,
        SupervisorName: employmentHistory.SupervisorName,
        SupervisorDesignation: employmentHistory.SupervisorDesignation,
        SupervisorPhone: employmentHistory.SupervisorPhone,
        JobResponsibilities: employmentHistory.JobResponsibilities,
        Salary: employmentHistory.Salary,
        StartDate: employmentHistory.StartDate,
        EndDate: employmentHistory.EndDate,
        TillNow: employmentHistory.TillNow,
        CreatedAt: employmentHistory.CreatedAt,
        UpdatedAt: employmentHistory.UpdatedAt,
        CreatedBy: employmentHistory.CreatedBy,
        UpdatedBy: employmentHistory.UpdatedBy,
      }),
    );

    personSchema.Attachments = model.Attachments?.map(
      (personAttachment: PersonAttachmentModel) => ({
        _id: new Types.ObjectId(personAttachment.AttachmentId),
        DocumentTitle: personAttachment.DocumentTitle,
        FileUrl: personAttachment.FileUrl,
        CreatedAt: personAttachment.CreatedAt,
        UpdatedAt: personAttachment.UpdatedAt,
        CreatedBy: personAttachment.CreatedBy,
        UpdatedBy: personAttachment.UpdatedBy,
      }),
    );

    return personSchema;
  }
}
