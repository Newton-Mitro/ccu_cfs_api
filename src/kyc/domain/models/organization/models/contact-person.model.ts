import { PersonModel } from '../../person/models/person.model';
import { PersonProps } from '../../person/person.aggregate';

export type ContactPersonProps = PersonProps & { contactPersonId: string };

export class ContactPersonModel extends PersonModel {
  readonly contactPersonId: string;

  constructor(contactPersonProps: ContactPersonProps) {
    super(contactPersonProps);
    this.contactPersonId = contactPersonProps.contactPersonId;
  }
}
