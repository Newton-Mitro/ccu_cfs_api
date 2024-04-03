import { IEvent } from '@nestjs/cqrs';

export class PersonAddedEvent implements IEvent {
  constructor(public readonly personId: string) {}
}
