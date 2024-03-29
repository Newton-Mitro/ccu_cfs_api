import { HttpException, HttpStatus } from '@nestjs/common';
import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { StoreBase64File } from 'src/common/utils/store-base64-file';
import { BirthRegistrationExistException } from 'src/kyc/application/exceptions/birth-registration-exist.exception';
import { MobileExistException } from 'src/kyc/application/exceptions/mobile-number-exist.exception';
import { NIDExistException } from 'src/kyc/application/exceptions/nid-exist.exception';
import { PeoplesRepository } from 'src/kyc/infrastructure/repositories/peoples.repository';
import { PersonAggregate } from '../../../../domain/models/person/person.aggregate';
import { UpdatePersonCommand } from './update-person.command';
@CommandHandler(UpdatePersonCommand)
export class UpdatePersonHandler
  implements ICommandHandler<UpdatePersonCommand>
{
  constructor(
    private peoplesRepository: PeoplesRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: UpdatePersonCommand): Promise<PersonAggregate> {
    const person = await this.peoplesRepository.findById(command.personId);

    let fileUrl: string = '';
    let personModel: PersonAggregate;

    if (person) {
      if (command.addPersonCommand.photo) {
        fileUrl = StoreBase64File.store(
          'persons/photo',
          person.identificationNumber,
          command.addPersonCommand.photo.fileExtension,
          command.addPersonCommand.photo.base64Document,
        );
      }

      if (fileUrl) {
        personModel = this.publisher.mergeObjectContext(
          new PersonAggregate({
            ...command.addPersonCommand,
            personId: person.personId,
            identificationNumber: person.identificationNumber,
            photo: fileUrl,
          }),
        );
      } else {
        personModel = this.publisher.mergeObjectContext(
          new PersonAggregate({
            ...command.addPersonCommand,
            personId: person.personId,
            identificationNumber: person.identificationNumber,
            photo: person.photo,
          }),
        );
      }

      // [ ] Check if NID already exist.
      if (personModel.nid) {
        const personWithNID = await this.peoplesRepository.findByNID(
          personModel.nid,
        );
        if (personWithNID) {
          throw new NIDExistException();
        }
      }
      // [ ] Check if birth registration number already exist.
      if (personModel.birthRegistrationNumber) {
        const personWithBNR = await this.peoplesRepository.findByBNR(
          personModel.birthRegistrationNumber,
        );
        if (personWithBNR) {
          throw new BirthRegistrationExistException();
        }
      }
      // [ ] Check if mobile number already exist.
      if (personModel.mobileNumber) {
        const personWithMobileNumber =
          await this.peoplesRepository.findByMobileNumber(
            personModel.mobileNumber,
          );
        if (personWithMobileNumber) {
          throw new MobileExistException();
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

      const personModelRes =
        await this.peoplesRepository.createPerson(personModel);
      personModel.commit();
      console.log('personModelRes');
      return personModelRes;
    }

    throw new HttpException('Person not found', HttpStatus.BAD_REQUEST);
  }
}
