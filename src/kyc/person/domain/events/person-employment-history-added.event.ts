import { IEvent } from '@nestjs/cqrs';

export class PersonEmploymentHistoryAddedEvent implements IEvent {
  constructor(
    public readonly personId: string,
    public readonly employmentHistoryId: string,
  ) {}
}
