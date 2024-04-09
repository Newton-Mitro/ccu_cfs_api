import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { OrganizationAggregate } from '../../../domain/models/organization.aggregate';
import { OrganizationsRepository } from '../../../infrastructure/repositories/organizations.repository';
import { ListOrganizationsQuery } from './list-organizations.query';

@QueryHandler(ListOrganizationsQuery)
export class ListOrganizationsQueryHandler
  implements IQueryHandler<ListOrganizationsQuery>
{
  constructor(private organizationsRepository: OrganizationsRepository) {}

  async execute(
    query: ListOrganizationsQuery,
  ): Promise<OrganizationAggregate[]> {
    const organizations = await this.organizationsRepository.find(
      [
        '_id',
        'identificationNumber',
        'nameEn',
        'nameBn',
        'email',
        'contactNumber',
        'phoneNumber',
        'mobileNumber',
        'customerType',
      ],
      query.page,
      query.limit,
      query.order_by,
      query.sort_by,
    );
    return organizations;
  }
}
