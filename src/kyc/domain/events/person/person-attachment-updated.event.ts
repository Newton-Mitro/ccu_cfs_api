import { IEvent } from '@nestjs/cqrs';

export class PersonAttachmentUpdatedEvent implements IEvent {
  constructor(
    public readonly personId: string,
    public readonly attachmentId: string,
  ) {}
}
