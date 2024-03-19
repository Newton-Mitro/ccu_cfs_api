import { Types } from 'mongoose';
import { StoreBase64File } from 'src/common/utils/store-base64-file';
import { PhotoAttachmentEntity } from 'src/kyc/domain/models/common/photo-attachment.entity';
import { PersonModel } from 'src/kyc/domain/models/person/person.aggregate';
import { CreatePersonCommand } from '../../commands/person/create-person/create-person.command';

export class PersonModelMapper {
  static mapToPersonModel(model: CreatePersonCommand): PersonModel {
    const personModel = new PersonModel();
    personModel.CustomerId = new Types.ObjectId().toHexString();
    personModel.IdentificationNumber = String(new Date().valueOf()).substring(
      3,
      13,
    );

    personModel.NameEn = model.nameEn;
    personModel.NameBn = model.nameBn;
    personModel.ContactNumber = model.contactNumber;
    personModel.PhoneNumber = model.phoneNumber;
    personModel.MobileNumber = model.mobileNumber;
    personModel.Email = model.email;
    personModel.DateOfBirth = model.dateOfBirth;
    personModel.NID = model.nid;
    personModel.BirthRegistrationNumber = model.birthRegistrationNumber;
    personModel.BloodGroup = model.bloodGroup;
    personModel.Gender = model.gender;
    personModel.Religion = model.religion;
    personModel.Profession = model.profession;
    personModel.MaritalStatus = model.maritalStatus;

    const fileUrl = StoreBase64File.store(
      'persons/photo',
      model.nameEn,
      model.photo.fileExtension,
      model.photo.base64Document,
    );

    personModel.Photo = new PhotoAttachmentEntity(
      new Types.ObjectId().toHexString(),
      model.photo.documentTitle,
      fileUrl,
    );

    return personModel;
  }
}
