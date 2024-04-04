import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { Types } from 'mongoose';
import { PeoplesRepository } from '../../../infrastructure/repositories/peoples.repository';
import { RemovePersonCommand } from './remove-person.command';

@CommandHandler(RemovePersonCommand)
export class RemovePersonHandler
  implements ICommandHandler<RemovePersonCommand>
{
  constructor(private peoplesRepository: PeoplesRepository) {}

  async execute(command: RemovePersonCommand): Promise<void> {
    await this.peoplesRepository.remove({
      _id: new Types.ObjectId(command.personId),
    });
  }
}
