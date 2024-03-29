import { IEvent } from '@nestjs/cqrs';

export class OrganizationUpdatedEvent implements IEvent {
  constructor(public readonly organizationId: string) {}
}
