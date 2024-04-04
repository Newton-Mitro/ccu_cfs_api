import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { MessagingService } from '../../../../messaging/application/messaging.service';
import { PersonAddedEvent } from '../../domain/events/person-added.event';
import { PeoplesRepository } from '../../infrastructure/repositories/peoples.repository';
import { Types } from 'mongoose';

@EventsHandler(PersonAddedEvent)
export class PersonAddedEventHandler
  implements IEventHandler<PersonAddedEvent>
{
  constructor(
    private peoplesRepository: PeoplesRepository,
    private messagingService: MessagingService,
  ) {}

  async handle(event: PersonAddedEvent) {
    const person = await this.peoplesRepository.findOne({
      _id: new Types.ObjectId(event.personId),
    });
    this.messagingService.sendEmail({
      to: person?.email,
      from: 'test@email.com',
      subject: 'Person Added',
      text: 'Person has been added',
      html: 'Person has been added',
      sender: 'test@email.com',
    });
  }
}

// {
//   to: person?.email,
//   from: 'test@email.com',
//   subject: 'Person Added',
//   text: 'Person has been added',
//   html: 'Person has been added',
//   sender: 'test@email.com',
//   context: {
//       [name: string]: any;
//   };
//   template: string
// }
