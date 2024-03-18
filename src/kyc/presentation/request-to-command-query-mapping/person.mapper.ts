import { CreatePersonCommand } from 'src/kyc/application/commands/person/create-person/create-person.command';
import { CreatePersonRequest } from 'src/kyc/application/contract/person/request/create-person.request';

export class PersonMapper {
  getCreatePersonDTO(createPersonCommand: CreatePersonCommand) {}
  getCreatePersonCommand(createPersonDTO: CreatePersonRequest) {}
}
