import { IEvent } from '@nestjs/cqrs';

export class PersonEducationAddedEvent implements IEvent {
  constructor(
    public readonly personId: string,
    public readonly educationId: string,
  ) {}
}
