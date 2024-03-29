import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PersonAddedEvent } from '../../../domain/events/person/person-added.event';
import { PeoplesRepository } from '../../../infrastructure/repositories/peoples.repository';

@EventsHandler(PersonAddedEvent)
export class PersonAddedEventHandler
  implements IEventHandler<PersonAddedEvent>
{
  constructor(private peoplesRepository: PeoplesRepository) {}

  async handle(event: PersonAddedEvent) {
    const person = await this.peoplesRepository.findById(event.personId);
    console.log('person event');
  }
}
