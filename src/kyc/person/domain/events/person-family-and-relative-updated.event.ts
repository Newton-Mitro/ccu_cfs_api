import { IEvent } from '@nestjs/cqrs';

export class PersonFamilyAndRelativeUpdateEvent implements IEvent {
  constructor(
    public readonly personId: string,
    public readonly familyTreeId: string,
  ) {}
}
