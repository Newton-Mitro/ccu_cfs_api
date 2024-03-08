import { CreateOrganizationCommand } from 'src/kyc/application/commands/create-organization/create-organization.command';
import { CreateOrganizationRequest } from '../contract/organization/create-organization.request';

export class PersonMapper {
  getCreateOrganizationDTO(
    createOrganizationCommand: CreateOrganizationCommand,
  ) {}
  getCreateOrganizationCommand(
    createOrganizationDTO: CreateOrganizationRequest,
  ) {}
}
