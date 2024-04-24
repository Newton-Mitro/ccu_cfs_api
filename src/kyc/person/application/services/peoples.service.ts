import { Injectable, NotFoundException } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { FindAllQueryRequest } from '../../../../common/application/contract/find-all-query.dto';
import {
  AddPersonCommand,
  PersonPhotoAttachment,
} from '../commands/add-person/add-person.command';
import { RemovePersonCommand } from '../commands/remove-person/remove-person.command';
import { UpdatePersonCommand } from '../commands/update-person/update-person.command';
import { CreatePersonRequest } from '../contract/requests/create-person.request';
import { UpdatePersonRequest } from '../contract/requests/update-person.request';
import { PersonAggregateToResponseMapper } from '../mapping/person-aggregate-to-response.mapper';
import { GetPersonQuery } from '../queries/get-person/get-person.query';
import { ListPeoplesQuery } from '../queries/list-peoples/list-peoples.query';

@Injectable()
export class PeoplesService {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
    private readonly personAggregateToResponseMapper: PersonAggregateToResponseMapper,
  ) {}

  async create(
    user: any,
    createdAt: Date,
    updatedAt: Date,
    createPersonRequest: CreatePersonRequest,
  ): Promise<void> {
    const person = await this.commandBus.execute(
      new AddPersonCommand(
        createPersonRequest.name_en,
        createPersonRequest?.name_bn,
        new Date(createPersonRequest.date_of_birth),
        createPersonRequest.gender,
        createPersonRequest.blood_group,
        createPersonRequest.religion,
        createPersonRequest?.nid,
        createPersonRequest?.birth_registration_number,
        createPersonRequest.marital_status,
        createPersonRequest?.contact_number,
        createPersonRequest.mobile_number,
        createPersonRequest?.phone_number,
        createPersonRequest.email,
        createPersonRequest.profession,
        createPersonRequest.photo &&
          new PersonPhotoAttachment(
            createPersonRequest.photo.base64_document,
            createPersonRequest.photo.file_extension,
            createPersonRequest.photo.document_title,
          ),
        createdAt,
        updatedAt,
        user?.id,
        user?.id,
      ),
    );
  }

  async findAll(query: FindAllQueryRequest) {
    const peoples = await this.queryBus.execute(
      new ListPeoplesQuery(
        query.search_fields,
        query.search_text,
        query.page,
        query.limit,
        query.order_by,
        query.sort_by,
      ),
    );

    return peoples.map((entityDocument) =>
      this.personAggregateToResponseMapper.mapAggregateToResponse(
        entityDocument,
      ),
    );
  }

  async findById(id: string) {
    const person = await this.queryBus.execute(new GetPersonQuery(id));

    if (!person) {
      throw new NotFoundException(`Person #${id} not found`);
    }
    return this.personAggregateToResponseMapper.mapAggregateToResponse(person);
  }

  async update(
    user: any,
    updatedAt,
    personId,
    updatePeopleRequest: UpdatePersonRequest,
  ) {
    const person = await this.commandBus.execute(
      new UpdatePersonCommand(
        personId,
        updatePeopleRequest.name_en,
        updatePeopleRequest?.name_bn,
        new Date(updatePeopleRequest.date_of_birth),
        updatePeopleRequest.gender,
        updatePeopleRequest.blood_group,
        updatePeopleRequest.religion,
        updatePeopleRequest.marital_status,
        updatePeopleRequest?.contact_number,
        updatePeopleRequest?.phone_number,
        updatePeopleRequest.profession,
        updatePeopleRequest.photo &&
          new PersonPhotoAttachment(
            updatePeopleRequest.photo.base64_document,
            updatePeopleRequest.photo.file_extension,
            updatePeopleRequest.photo.document_title,
          ),
        updatedAt,
        user?.id,
      ),
    );
  }

  async remove(id: string) {
    await this.commandBus.execute(new RemovePersonCommand(id));
  }
}
