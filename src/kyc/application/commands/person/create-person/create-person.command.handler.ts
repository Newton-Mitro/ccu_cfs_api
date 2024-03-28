import { HttpException, HttpStatus } from '@nestjs/common';
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

  async execute(command: CreatePersonCommand): Promise<PersonAggregate> {
    const personModel = new PersonAggregate();
    const personId = new Types.ObjectId().toHexString();
    const identificationNumber = String(Date.now());
    const fileUrl = StoreBase64File.store(
      'persons/photo',
      identificationNumber,
      command.photo.fileExtension,
      command.photo.base64Document,
    );

    personModel.addPerson({
      ...command,
      personId: personId,
      identificationNumber: identificationNumber,
      photo: fileUrl,
    });

    // [ ] Check if NID already exist.
    if (personModel.nid) {
      const personWithNID = await this.peoplesRepository.findByNID(
        personModel.nid,
      );
      if (personWithNID) {
        throw new HttpException(
          'Person with the same national identification number already exist',
          HttpStatus.BAD_REQUEST,
        );
      }
    }
    // [ ] Check if birth registration number already exist.
    if (personModel.birthRegistrationNumber) {
      const personWithBNR = await this.peoplesRepository.findByBNR(
        personModel.birthRegistrationNumber,
      );
      if (personWithBNR) {
        throw new HttpException(
          'Person with the same birth registration number already exist',
          HttpStatus.BAD_REQUEST,
        );
      }
    }
    // [ ] Check if mobile number already exist.
    if (personModel.mobileNumber) {
      const personWithMobileNumber =
        await this.peoplesRepository.findByMobileNumber(
          personModel.mobileNumber,
        );
      if (personWithMobileNumber) {
        throw new HttpException(
          'Person with the same mobile number already exist',
          HttpStatus.BAD_REQUEST,
        );
      }
    }
    // [ ] Check if email already exist.
    if (personModel.email) {
      const personWithEmail = await this.peoplesRepository.findByEmail(
        personModel.email,
      );
      if (personWithEmail) {
        throw new HttpException(
          'Person with the same email already exist',
          HttpStatus.BAD_REQUEST,
        );
      }
    }

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
