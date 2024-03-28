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
    personSchema._id = new Types.ObjectId(model.personId);
    personSchema.identificationNumber = model.identificationNumber;
    personSchema.nameEn = model.nameEn;
    personSchema.nameBn = model.nameBn;
    personSchema.contactNumber = model.contactNumber;
    personSchema.phoneNumber = model.phoneNumber;
    personSchema.mobileNumber = model.mobileNumber;
    personSchema.email = model.email;
    personSchema.dateOfBirth = model.dateOfBirth;
    personSchema.nid = model.nid;
    personSchema.birthRegistrationNumber = model.birthRegistrationNumber;
    personSchema.bloodGroup = model.bloodGroup;
    personSchema.gender = model.gender;
    personSchema.religion = model.religion;
    personSchema.profession = model.profession;
    personSchema.maritalStatus = model.maritalStatus;
    personSchema.photo = model.photo;
    personSchema.createdAt = model.createdAt;
    personSchema.updatedAt = model.updatedAt;
    personSchema.createdBy = model.createdBy;
    personSchema.updatedBy = model.updatedBy;

    personSchema.addresses = model.addresses?.map((address: AddressModel) => ({
      _id: new Types.ObjectId(address.addressId),
      ...address,
    }));

    personSchema.familyTree = model.familyTree?.map(
      (familyAndRelative: FamilyAndRelativeModel) => ({
        _id: new Types.ObjectId(familyAndRelative.familyTreeId),
        ...familyAndRelative,
      }),
    );

    personSchema.educations = model.educations?.map(
      (education: EducationModel) => ({
        _id: new Types.ObjectId(education.educationId),
        ...education,
      }),
    );

    personSchema.trainings = model.trainings?.map(
      (training: TrainingModel) => ({
        _id: new Types.ObjectId(training.trainingId),
        ...training,
      }),
    );

    personSchema.employmentHistories = model.employmentHistories?.map(
      (employmentHistory: EmploymentHistoryModel) => ({
        _id: new Types.ObjectId(employmentHistory.employmentHistoryId),
        ...employmentHistory,
      }),
    );

    personSchema.attachments = model.attachments?.map(
      (personAttachment: PersonAttachmentModel) => ({
        _id: new Types.ObjectId(personAttachment.attachmentId),
        ...personAttachment,
      }),
    );

    return personSchema;
  }
}
