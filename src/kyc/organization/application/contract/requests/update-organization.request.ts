import { PartialType } from '@nestjs/mapped-types';
import { CreateOrganizationRequest } from './create-organization.request';

export class UpdateOrganizationRequest extends PartialType(
  CreateOrganizationRequest,
) {}
