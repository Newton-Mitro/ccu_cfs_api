import { Injectable, NotFoundException } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { FindAllQueryRequest } from '../../../../common/contract/find-all-query.dto';
import { AuthUserType } from '../../../../common/types/auth-user.type';
import {
  AddOrganizationCommand,
  OrganizationPhotoAttachment,
} from '../commands/add-organization/add-organization.command';
import { UpdateOrganizationCommand } from '../commands/update-organization/update-organization.command';
import { CreateOrganizationRequest } from '../contract/requests/create-organization.request';
import { UpdateOrganizationRequest } from '../contract/requests/update-organization.request';
import { OrganizationAggregateToResponseMapper } from '../mapping/organization-aggregate-to-response.mapper';
import { GetOrganizationQuery } from '../queries/get-organization/get-organization.query';
import { ListOrganizationsQuery } from '../queries/list-organizations/list-organizations.query';

@Injectable()
export class OrganizationsService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
    private readonly organizationAggregateToResponseMapper: OrganizationAggregateToResponseMapper,
  ) {}

  async create(
    user: AuthUserType,
    createdAt: Date,
    updatedAt: Date,
    createOrganizationRequest: CreateOrganizationRequest,
  ): Promise<void> {
    const person = await this.commandBus.execute(
      new AddOrganizationCommand(
        createOrganizationRequest.registration_number,
        createOrganizationRequest.tin,
        createOrganizationRequest.name_en,
        createOrganizationRequest.name_bn,
        createOrganizationRequest.email,
        createOrganizationRequest.contact_number,
        createOrganizationRequest.mobile_number,
        createOrganizationRequest.phone_number,
        createOrganizationRequest.fax,
        createOrganizationRequest.website,
        createOrganizationRequest.logo &&
          new OrganizationPhotoAttachment(
            createOrganizationRequest.logo.base64_document,
            createOrganizationRequest.logo.file_extension,
            createOrganizationRequest.logo.document_title,
          ),
        createdAt,
        updatedAt,
        user,
        user,
      ),
    );
  }

  async findAll(query: FindAllQueryRequest) {
    const peoples = await this.queryBus.execute(
      new ListOrganizationsQuery(
        query.page,
        query.limit,
        query.order_by,
        query.sort_by,
      ),
    );

    return peoples.map((entityDocument) =>
      this.organizationAggregateToResponseMapper.mapAggregateToResponse(
        entityDocument,
      ),
    );
  }

  async findOne(id: string) {
    const organization = await this.queryBus.execute(
      new GetOrganizationQuery(id),
    );

    if (!organization) {
      throw new NotFoundException(`Organization #${id} not found`);
    }
    return this.organizationAggregateToResponseMapper.mapAggregateToResponse(
      organization,
    );
  }

  async update(
    user: any,
    updatedAt: Date,
    organizationId: string,
    updateOrganizationRequest: UpdateOrganizationRequest,
  ) {
    const organization = await this.commandBus.execute(
      new UpdateOrganizationCommand(
        organizationId,
        updateOrganizationRequest.registration_number,
        updateOrganizationRequest.tin,
        updateOrganizationRequest.name_en,
        updateOrganizationRequest.name_bn,
        updateOrganizationRequest.email,
        updateOrganizationRequest.contact_number,
        updateOrganizationRequest.mobile_number,
        updateOrganizationRequest.phone_number,
        updateOrganizationRequest.fax,
        updateOrganizationRequest.website,
        updateOrganizationRequest.logo &&
          new OrganizationPhotoAttachment(
            updateOrganizationRequest.logo.base64_document,
            updateOrganizationRequest.logo.file_extension,
            updateOrganizationRequest.logo.document_title,
          ),
        updatedAt,
        user?.id,
      ),
    );
  }

  async remove(id: string) {
    // await this.commandBus.execute(new RemoveOrganizationCommand(id));
  }
}
