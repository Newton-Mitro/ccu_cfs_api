import { IEvent } from '@nestjs/cqrs';

export class PersonAddressUpdatedEvent implements IEvent {
  constructor(
    public readonly personId: string,
    public readonly addressId: string,
  ) {}
}
