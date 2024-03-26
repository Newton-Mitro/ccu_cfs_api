import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Types } from 'mongoose';
import { StoreBase64File } from 'src/common/utils/store-base64-file';
import { PersonAggregate } from 'src/kyc/domain/models/person/person.aggregate';
import { PeoplesRepository } from 'src/kyc/infrastructure/repositories/peoples.repository';
import { CreatePersonCommand } from './create-person.command';
@CommandHandler(CreatePersonCommand)
export class CreatePersonHandler
  implements ICommandHandler<CreatePersonCommand>
{
  constructor(private peoplesRepository: PeoplesRepository) {}

  execute(command: CreatePersonCommand): Promise<PersonAggregate> {
    const personModel = new PersonAggregate();
    const personId = new Types.ObjectId().toHexString();
    const identificationNumber = String(new Date().valueOf()).substring(3, 13);
    const fileUrl = StoreBase64File.store(
      'persons/photo',
      command.nameEn,
      command.photo.fileExtension,
      command.photo.base64Document,
    );

    personModel.createPerson(
      personId,
      identificationNumber,
      command.nameEn,
      command.nameBn,
      command.contactNumber,
      command.mobileNumber,
      command.phoneNumber,
      command.email,
      'Person',
      command.dateOfBirth,
      command.gender,
      command.bloodGroup,
      command.religion,
      command.maritalStatus,
      command.profession,
      command.nid,
      command.birthRegistrationNumber,
      fileUrl,
      command.createdAt,
      command.updatedAt,
      command.createdBy,
      command.updatedBy,
    );
    const personModelRes = this.peoplesRepository.createPerson(personModel);
    return personModelRes;
  }
}

// Generate PersonIdentificationNumber (Auto Incremental, 6 digit)
// Check if NID already exist
// Check if BirthRegistrationNumber already exist
// Check if MobileNumber already exist
// Check if Email already exist
// Send email if person created
