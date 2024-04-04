import { HttpException, HttpStatus } from '@nestjs/common';
import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { Types } from 'mongoose';
import { StoreBase64File } from 'src/common/utils/store-base64-file';
import { PeoplesRepository } from '../../../infrastructure/repositories/peoples.repository';
import { UpdatePersonCommand } from './update-person.command';

@CommandHandler(UpdatePersonCommand)
export class UpdatePersonHandler
  implements ICommandHandler<UpdatePersonCommand>
{
  constructor(
    private peoplesRepository: PeoplesRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: UpdatePersonCommand): Promise<void> {
    const person = await this.peoplesRepository.findOne({
      _id: new Types.ObjectId(command.personId),
    });

    let fileUrl: string = '';

    if (person) {
      this.publisher.mergeObjectContext(person);
      if (command.photo) {
        fileUrl = StoreBase64File.store(
          'persons/photo',
          person.identificationNumber,
          command.photo.fileExtension,
          command.photo.base64Document,
        );
      }

      if (fileUrl) {
        person.updatePerson({
          ...command,
          customerType: 'Person',
          personId: person.personId,
          nid: person.nid,
          mobileNumber: person.mobileNumber,
          email: person.email,
          birthRegistrationNumber: person.birthRegistrationNumber,
          identificationNumber: person.identificationNumber,
          photo: fileUrl,
          createdAt: new Date(),
          createdBy: '',
        });
      } else {
        person.updatePerson({
          ...command,
          personId: person.personId,
          nid: person.nid,
          mobileNumber: person.mobileNumber,
          email: person.email,
          birthRegistrationNumber: person.birthRegistrationNumber,
          identificationNumber: person.identificationNumber,
          photo: person.photo,
          customerType: 'Person',
          createdAt: new Date(),
          createdBy: '',
        });
      }

      await this.peoplesRepository.findOneAndReplace(
        { _id: new Types.ObjectId(person.personId) },
        person,
      );

      person.commit();
    } else {
      throw new HttpException('Person not found', HttpStatus.BAD_REQUEST);
    }
  }
}
