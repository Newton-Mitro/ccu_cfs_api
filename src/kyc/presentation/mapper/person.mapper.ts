import { CreatePersonCommand } from 'src/kyc/application/commands/create-person/create-person.command';
import { CreatePersonRequest } from '../contract/person/request/create-person.request';

export class PersonMapper {
  getCreatePersonDTO(createPersonCommand: CreatePersonCommand) {}
  getCreatePersonCommand(createPersonDTO: CreatePersonRequest) {}
}
