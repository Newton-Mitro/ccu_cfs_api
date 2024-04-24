import { Types } from 'mongoose';
import { ISchemaMapper } from '../../../../common/domain/mapper/schema.mapper';
import { AddressModel } from '../../../shared/domain/models/address.model';
import { EducationModel } from '../../domain/models/education.model';
import { EmploymentHistoryModel } from '../../domain/models/employment-history.model';
import { FamilyAndRelativeModel } from '../../domain/models/family-and-relative.model';
import { PersonAttachmentModel } from '../../domain/models/person-attachment.model';
import { PersonAggregate } from '../../domain/models/person.aggregate';
import { TrainingModel } from '../../domain/models/training.model';
import { Person } from '../schema/person.schema';

export class PersonAggregateToSchemaMapper
  implements ISchemaMapper<Person, PersonAggregate>
{
  mapAggregateToSchema(model: PersonAggregate): Person {
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

    const family_tree = model.familyTree?.map(
      (familyAndRelative: FamilyAndRelativeModel) => ({
        _id: new Types.ObjectId(familyAndRelative.familyTreeId),
        ...familyAndRelative,
      }),
    );

    if (family_tree) {
      personSchema.familyTree = family_tree;
    }

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
