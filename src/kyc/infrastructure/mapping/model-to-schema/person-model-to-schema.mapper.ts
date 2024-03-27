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
    personSchema._id = new Types.ObjectId(model.Person.PersonId);
    personSchema.IdentificationNumber = model.Person.IdentificationNumber;
    personSchema.NameEn = model.Person.NameEn;
    personSchema.NameBn = model.Person.NameBn;
    personSchema.ContactNumber = model.Person.ContactNumber;
    personSchema.PhoneNumber = model.Person.PhoneNumber;
    personSchema.MobileNumber = model.Person.MobileNumber;
    personSchema.Email = model.Person.Email;
    personSchema.DateOfBirth = model.Person.DateOfBirth;
    personSchema.NID = model.Person.NID;
    personSchema.BirthRegistrationNumber = model.Person.BirthRegistrationNumber;
    personSchema.BloodGroup = model.Person.BloodGroup;
    personSchema.Gender = model.Person.Gender;
    personSchema.Religion = model.Person.Religion;
    personSchema.Profession = model.Person.Profession;
    personSchema.MaritalStatus = model.Person.MaritalStatus;
    personSchema.Photo = model.Person.Photo;
    personSchema.CreatedAt = model.Person.CreatedAt;
    personSchema.UpdatedAt = model.Person.UpdatedAt;
    personSchema.CreatedBy = model.Person.CreatedBy;
    personSchema.UpdatedBy = model.Person.UpdatedBy;

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
