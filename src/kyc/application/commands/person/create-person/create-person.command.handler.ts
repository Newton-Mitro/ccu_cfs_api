import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { PersonModelMapper } from 'src/kyc/application/mapping/business-model-mapping/person-model.mapper';
import { PeoplesRepository } from 'src/kyc/infrastructure/repositories/peoples.repository';
import { CreatePersonCommand } from './create-person.command';

@CommandHandler(CreatePersonCommand)
export class CreatePersonHandler
  implements ICommandHandler<CreatePersonCommand>
{
  constructor(private peoplesRepository: PeoplesRepository) {}

  execute(command: CreatePersonCommand): Promise<any> {
    return this.peoplesRepository.createPerson(
      PersonModelMapper.mapToPersonModel(command),
    );
  }
}

// Generate PersonIdentificationNumber (Auto Incremental, 6 digit)
// Check if NID already exist
// Check if BirthRegistrationNumber already exist
// Check if MobileNumber already exist
// Check if Email already exist
// Send email if person created
