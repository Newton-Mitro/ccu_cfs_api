import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { OrganizationAggregate } from '../../../domain/models/organization.aggregate';
import { OrganizationsRepository } from '../../../infrastructure/repositories/organizations.repository';
import { GetOrganizationQuery } from './get-organization.query';

@QueryHandler(GetOrganizationQuery)
export class GetOrganizationQueryHandler
  implements IQueryHandler<GetOrganizationQuery>
{
  constructor(private organizationsRepository: OrganizationsRepository) {}

  async execute(query: GetOrganizationQuery): Promise<OrganizationAggregate> {
    const organization = await this.organizationsRepository.findById(query.id);
    return organization;
  }
}
