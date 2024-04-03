import { IEvent } from '@nestjs/cqrs';

export class PersonTrainingAddedEvent implements IEvent {
  constructor(
    public readonly personId: string,
    public readonly trainingId: string,
  ) {}
}
