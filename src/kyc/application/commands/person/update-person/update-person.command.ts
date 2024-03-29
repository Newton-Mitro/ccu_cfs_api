import { AddPersonCommand } from '../add-person/add-person.command';

export class UpdatePersonCommand {
  constructor(
    public readonly personId: string,
    public readonly addPersonCommand: AddPersonCommand,
  ) {}
}
