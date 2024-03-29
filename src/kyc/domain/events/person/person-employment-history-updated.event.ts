import { IEvent } from '@nestjs/cqrs';

export class PersonEmploymentHistoryUpdatedEvent implements IEvent {
  constructor(
    public readonly personId: string,
    public readonly employmentHistoryId: string,
  ) {}
}
