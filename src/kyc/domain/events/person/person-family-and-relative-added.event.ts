import { IEvent } from '@nestjs/cqrs';

export class PersonFamilyAndRelativeAddedEvent implements IEvent {
  constructor(
    public readonly personId: string,
    public readonly familyTreeId: string,
  ) {}
}
