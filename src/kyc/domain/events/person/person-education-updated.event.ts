import { IEvent } from '@nestjs/cqrs';

export class PersonEducationUpdatedEvent implements IEvent {
  constructor(
    public readonly personId: string,
    public readonly educationId: string,
  ) {}
}
