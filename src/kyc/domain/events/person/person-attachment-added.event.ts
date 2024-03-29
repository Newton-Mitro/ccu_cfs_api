import { IEvent } from '@nestjs/cqrs';

export class PersonAttachmentAddedEvent implements IEvent {
  constructor(
    public readonly personId: string,
    public readonly attachmentId: string,
  ) {}
}
