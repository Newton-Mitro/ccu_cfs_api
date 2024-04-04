import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PersonAggregate } from '../../../domain/models/person.aggregate';
import { PeoplesRepository } from '../../../infrastructure/repositories/peoples.repository';
import { ListPeoplesQuery } from './list-peoples.query';

@QueryHandler(ListPeoplesQuery)
export class ListPeoplesQueryHandler
  implements IQueryHandler<ListPeoplesQuery>
{
  constructor(private peoplesRepository: PeoplesRepository) {}

  async execute(query: ListPeoplesQuery): Promise<PersonAggregate[]> {
    const personModelRes = await this.peoplesRepository.find(
      [
        '_id',
        'createdAt',
        'updatedAt',
        'identificationNumber',
        'nameEn',
        'nameBn',
        'email',
        'contactNumber',
        'phoneNumber',
        'mobileNumber',
        'dateOfBirth',
        'nid',
        'birthRegistrationNumber',
        'bloodGroup',
        'gender',
        'religion',
        'profession',
        'maritalStatus',
        'photo',
        'customerType',
      ],
      query.page,
      query.limit,
      query.order_by,
      query.sort_by,
    );
    return personModelRes;
  }
}
