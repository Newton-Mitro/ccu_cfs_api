import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreatePersonCommand } from './create-person.command';

@CommandHandler(CreatePersonCommand)
export class CreatePersonHandler
  implements ICommandHandler<CreatePersonCommand>
{
  // constructor(private repository: PersonRepository) {}

  execute(command: CreatePersonCommand): Promise<any> {
    throw new Error('Method not implemented.');
  }
}

// Generate PersonIdentificationNumber (Auto Incremental, 6 digit)
// Check if NID already exist
// Check if BirthRegistrationNumber already exist
// Check if MobileNumber already exist
// Check if Email already exist
// Send email if person created
