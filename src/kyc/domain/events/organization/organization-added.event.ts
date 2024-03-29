import { IEvent } from '@nestjs/cqrs';

export class OrganizationAddedEvent implements IEvent {
  constructor(public readonly organizationId: string) {}
}
