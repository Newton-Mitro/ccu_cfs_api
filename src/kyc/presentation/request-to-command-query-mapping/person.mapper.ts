import { CreatePersonRequest } from 'src/kyc/application/contract/person/requests/create-person.request';
import { AddPersonCommand } from '../../application/commands/person/add-person/add-person.command';

export class PersonMapper {
  getCreatePersonDTO(createPersonCommand: AddPersonCommand) {}
  getCreatePersonCommand(createPersonDTO: CreatePersonRequest) {}
}
