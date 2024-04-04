import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PersonAggregate } from '../../../domain/models/person.aggregate';
import { PeoplesRepository } from '../../../infrastructure/repositories/peoples.repository';
import { GetPersonQuery } from './get-person.query';

@QueryHandler(GetPersonQuery)
export class GetPersonQueryHandler implements IQueryHandler<GetPersonQuery> {
  constructor(private peoplesRepository: PeoplesRepository) {}

  async execute(query: GetPersonQuery): Promise<PersonAggregate> {
    const personModelRes = await this.peoplesRepository.findById(query.id);
    return personModelRes;
  }
}
