import { Types } from 'mongoose';
import { ISchemaMapper } from 'src/config/database/mongoose/schema.mapper';
import { AddressEntity } from 'src/kyc/domain/models/common/address.entity';
import { EducationEntity } from 'src/kyc/domain/models/person/entities/education.entity';
import { EmploymentHistoryEntity } from 'src/kyc/domain/models/person/entities/employment-history.entity';
import { FamilyAndRelativeEntity } from 'src/kyc/domain/models/person/entities/family-and-relative.entity';
import { PersonAttachmentEntity } from 'src/kyc/domain/models/person/entities/person-attachment.entity';
import { TrainingEntity } from 'src/kyc/domain/models/person/entities/training.entity';
import { PersonModel } from 'src/kyc/domain/models/person/person.aggregate';
import { Person } from '../../schema/person/person.schema';

export class PersonSchemaMapper implements ISchemaMapper<Person, PersonModel> {
  mapBusinessModelToSchema(model: PersonModel): Person {
    const personSchema = new Person();
    personSchema.IdentificationNumber = model.IdentificationNumber;
    personSchema.NameEn = model.NameEn;
    personSchema.NameBn = model.NameBn;
    personSchema.ContactNumber = model.ContactNumber;
    personSchema.PhoneNumber = model.PhoneNumber;
    personSchema.MobileNumber = model.MobileNumber;
    personSchema.Email = model.Email;

    personSchema.DateOfBirth = new Date(model.DateOfBirth);
    personSchema.NID = model.NID;
    personSchema.BirthRegistrationNumber = model.BirthRegistrationNumber;
    personSchema.BloodGroup = model.BloodGroup;
    personSchema.Gender = model.Gender;
    personSchema.Religion = model.Religion;
    personSchema.Profession = model.Profession;
    personSchema.MaritalStatus = model.MaritalStatus;
    personSchema.Photo = model.Photo && {
      _id: new Types.ObjectId(model.Photo.Id),
      DocumentTitle: model.Photo.DocumentTitle,
      FileUrl: model.Photo.FileUrl,
    };

    personSchema.Addresses = model.Addresses?.map((address: AddressEntity) => ({
      _id: new Types.ObjectId(address.Id),
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
    }));

    personSchema.FamilyTree = model.FamilyTree?.map(
      (familyAndRelative: FamilyAndRelativeEntity) => ({
        _id: new Types.ObjectId(familyAndRelative.Id),
        PersonId: familyAndRelative.CustomerId,
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
        Photo: familyAndRelative.Photo && {
          _id: new Types.ObjectId(model.Photo.Id),
          DocumentTitle: model.Photo.DocumentTitle,
          FileUrl: model.Photo.FileUrl,
        },
      }),
    );

    personSchema.Educations = model.Educations?.map(
      (education: EducationEntity) => ({
        _id: new Types.ObjectId(education.Id),
        EducationLevel: education.EducationLevel,
        EducationDegree: education.EducationDegree,
        InstituteName: education.InstituteName,
        MajorSubject: education.MajorSubject,
        PassingYear: education.PassingYear,
        Grade: education.Grade,
      }),
    );

    personSchema.Trainings = model.Trainings?.map(
      (training: TrainingEntity) => ({
        _id: new Types.ObjectId(training.Id),
        CourseTitle: training.CourseTitle,
        InstituteName: training.InstituteName,
        CourseContent: training.CourseContent,
        Result: training.Result,
        StartDate: training.StartDate,
        EndDate: training.EndDate,
      }),
    );

    personSchema.EmploymentHistories = model.EmploymentHistories?.map(
      (employmentHistory: EmploymentHistoryEntity) => ({
        _id: new Types.ObjectId(employmentHistory.Id),
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
      }),
    );

    personSchema.Attachments = model.Attachments?.map(
      (personAttachment: PersonAttachmentEntity) => ({
        _id: new Types.ObjectId(personAttachment.Id),
        DocumentTitle: personAttachment.DocumentTitle,
        FileUrl: personAttachment.FileUrl,
      }),
    );

    return personSchema;
  }
}
