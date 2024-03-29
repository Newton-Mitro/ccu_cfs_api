import { IEvent } from '@nestjs/cqrs';

export class PersonAddressAddedEvent implements IEvent {
  constructor(
    public readonly personId: string,
    public readonly addressId: string,
  ) {}
}
