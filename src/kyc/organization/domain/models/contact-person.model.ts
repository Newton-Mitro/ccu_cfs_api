import {
  PersonModel,
  PersonProps,
} from '../../../person/domain/models/person.model';

export type ContactPersonProps = PersonProps & { contactPersonId: string };

export class ContactPersonModel extends PersonModel {
  readonly contactPersonId: string;

  constructor(contactPersonProps: ContactPersonProps) {
    super(contactPersonProps);
    this.contactPersonId = contactPersonProps.contactPersonId;
  }
}
