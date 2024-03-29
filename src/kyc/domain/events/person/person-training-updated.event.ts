import { IEvent } from '@nestjs/cqrs';

export class PersonTrainingUpdatedEvent implements IEvent {
  constructor(
    public readonly personId: string,
    public readonly trainingId: string,
  ) {}
}
