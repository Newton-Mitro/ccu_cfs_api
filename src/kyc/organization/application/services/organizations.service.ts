import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  ORGANIZATION_MODEL,
  OrganizationDocument,
} from '../../infrastructure/schema/organization.schema';
import { CreateOrganizationRequest } from '../contract/requests/create-organization.request';
import { UpdateOrganizationRequest } from '../contract/requests/update-organization.request';

@Injectable()
export class OrganizationsService {
  constructor(
    @InjectModel(ORGANIZATION_MODEL)
    private readonly organizationModel: Model<OrganizationDocument>,
  ) {}

  async create(createOrganizationRequest: CreateOrganizationRequest) {
    // TODO Call AddOrganizationCommand
  }

  async findAll() {
    // TODO Call ListOrganizationQuery
  }

  async findOne(id: string) {
    // TODO Call GetOrganizationQuery
  }

  async update(
    id: string,
    updateOrganizationRequest: UpdateOrganizationRequest,
  ) {
    // TODO Call UpdateOrganizationCommand
  }

  async remove(id: string) {
    // TODO Call RemoveOrganizationCommand
  }
}
