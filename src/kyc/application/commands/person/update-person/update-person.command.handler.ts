import { HttpException, HttpStatus } from '@nestjs/common';
import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { StoreBase64File } from 'src/common/utils/store-base64-file';
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

    console.log(person);

    let fileUrl: string = '';
    let personModel: PersonAggregate;

    if (person) {
      if (command.photo) {
        fileUrl = StoreBase64File.store(
          'persons/photo',
          person.identificationNumber,
          command.photo.fileExtension,
          command.photo.base64Document,
        );
      }

      if (fileUrl) {
        personModel = this.publisher.mergeObjectContext(
          new PersonAggregate({
            ...command,
            personId: person.personId,
            nid: person.nid,
            mobileNumber: person.mobileNumber,
            email: person.email,
            birthRegistrationNumber: person.birthRegistrationNumber,
            identificationNumber: person.identificationNumber,
            photo: fileUrl,
          }),
        );
      } else {
        personModel = this.publisher.mergeObjectContext(
          new PersonAggregate({
            ...command,
            personId: person.personId,
            nid: person.nid,
            mobileNumber: person.mobileNumber,
            email: person.email,
            birthRegistrationNumber: person.birthRegistrationNumber,
            identificationNumber: person.identificationNumber,
            photo: person.photo,
          }),
        );
      }

      const personModelRes = await this.peoplesRepository.findOneAndReplace(
        personModel.personId,
        personModel,
      );
      personModel.commit();
      console.log('personModelRes');
      return personModelRes;
    }

    throw new HttpException('Person not found', HttpStatus.BAD_REQUEST);
  }
}
