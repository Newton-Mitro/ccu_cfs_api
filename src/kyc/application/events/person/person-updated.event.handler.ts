import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { PersonUpdatedEvent } from '../../../domain/events/person/person-updated.event';
import { PeoplesRepository } from '../../../infrastructure/repositories/peoples.repository';

@EventsHandler(PersonUpdatedEvent)
export class PersonUpdatedEventHandler
  implements IEventHandler<PersonUpdatedEvent>
{
  constructor(private peoplesRepository: PeoplesRepository) {}

  async handle(event: PersonUpdatedEvent) {
    const person = await this.peoplesRepository.findById(event.personId);
    console.log('person updated event');
  }
}
