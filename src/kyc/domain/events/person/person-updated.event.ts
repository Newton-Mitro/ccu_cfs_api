import { IEvent } from '@nestjs/cqrs';

export class PersonUpdatedEvent implements IEvent {
  constructor(public readonly personId: string) {}
}
