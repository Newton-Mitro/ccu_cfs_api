import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { Types } from 'mongoose';
import { StoreBase64File } from '../../../../../common/utils/store-base64-file';
import { OrganizationAggregate } from '../../../domain/models/organization.aggregate';
import { OrganizationsRepository } from '../../../infrastructure/repositories/organizations.repository';
import { AddOrganizationCommand } from './add-organization.command';

@CommandHandler(AddOrganizationCommand)
export class AddOrganizationCommandHandler
  implements ICommandHandler<AddOrganizationCommand>
{
  constructor(
    private organizationsRepository: OrganizationsRepository,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(
    command: AddOrganizationCommand,
  ): Promise<OrganizationAggregate> {
    const organizationId = new Types.ObjectId().toHexString();
    const identificationNumber = String(Date.now());

    let fileUrl: string = '';
    if (command?.logo) {
      fileUrl = StoreBase64File.store(
        'organizations/logo',
        identificationNumber,
        command.logo.fileExtension,
        command.logo.base64Document,
      );
    }

    const organizationModel = new OrganizationAggregate();
    organizationModel.addOrganization({
      ...command,
      organizationId: organizationId,
      identificationNumber: identificationNumber,
      logo: fileUrl,
    });

    this.publisher.mergeObjectContext(organizationModel);

    // [ ] Check if email already exist.
    // if (personModel.email) {
    //   const personWithEmail = await this.organizationsRepository.findByEmail(
    //     personModel.email,
    //   );
    //   if (personWithEmail) {
    //     throw new HttpException(
    //       'Person with the same email already exist',
    //       HttpStatus.BAD_REQUEST,
    //     );
    //   }
    // }

    const personModelRes =
      await this.organizationsRepository.createOrganization(organizationModel);
    organizationModel.commit();
    return personModelRes;
  }
}
