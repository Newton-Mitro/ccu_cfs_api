import { Injectable, NotFoundException } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  PERSON_MODEL,
  PersonDocument,
} from '../../infrastructure/schema/person/person.schema';
import {
  CreatePersonCommand,
  PersonPhotoAttachment,
} from '../commands/person/create-person/create-person.command';
import { CreatePersonRequest } from '../contract/person/requests/create-person.request';
import { UpdatePersonRequest } from '../contract/person/requests/update-person.request';
import { PersonResponse } from '../contract/person/responses/person.response';
import { PersonAggregateToResponseMapper } from '../mapping/aggregate-to-response/person-aggregate-to-response.mapper';

@Injectable()
export class PeoplesService {
  constructor(
    private commandBus: CommandBus,
    @InjectModel(PERSON_MODEL)
    private readonly personModel: Model<PersonDocument>,
  ) {}

  async create(
    user: any,
    createdAt,
    updatedAt,
    createPersonRequest: CreatePersonRequest,
  ): Promise<PersonResponse> {
    const person = await this.commandBus.execute(
      new CreatePersonCommand(
        createPersonRequest.name_en,
        createPersonRequest.name_bn,
        createPersonRequest.date_of_birth,
        createPersonRequest.gender,
        createPersonRequest.blood_group,
        createPersonRequest.religion,
        createPersonRequest.nid,
        createPersonRequest.birth_registration_number,
        createPersonRequest.marital_status,
        createPersonRequest.contact_number,
        createPersonRequest.mobile_number,
        createPersonRequest.phone_number,
        createPersonRequest.email,
        createPersonRequest.profession,
        new PersonPhotoAttachment(
          createPersonRequest.photo.base64_document,
          createPersonRequest.photo.file_extension,
        ),
        createdAt,
        updatedAt,
        user?.id,
        user?.id,
      ),
    );

    return PersonAggregateToResponseMapper.map(person);
  }

  async findAll() {
    const resultPerPage = 5;
    const page = 1 - 1;
    const peoples = await this.personModel
      .find({})
      .select([
        '_id',
        'IdentificationNumber',
        'NameEn',
        'NameBn',
        'Email',
        'ContactNumber',
        'DateOfBirth',
        'NID',
        'BirthRegistrationNumber',
        'BloodGroup',
        'Gender',
        'Religion',
        'Profession',
        'MaritalStatus',
        'Photo',
        'CustomerType',
      ])
      .sort({ nameEn: 'asc' })
      .limit(resultPerPage)
      .skip(resultPerPage * page);

    return peoples;
  }

  async findOne(id: string) {
    const existingPerson = await this.personModel.findById(id);
    if (!existingPerson) {
      throw new NotFoundException(`Person #${id} not found`);
    }
    return existingPerson;
  }

  async update(id: string, updatePeopleRequest: UpdatePersonRequest) {
    const updatedPerson = await this.personModel.findByIdAndUpdate(
      id,
      updatePeopleRequest,
      { new: true },
    );
    if (!updatedPerson) {
      throw new NotFoundException(`Person #${id} not found`);
    }
    return updatedPerson;

    // const transactionHandlerMethod = async (
    //   session: ClientSession,
    // ): Promise<any> => {
    //   const createdPerson = new this.personModel(updatePeopleDto);
    //   const person = await createdPerson.save({ session });

    //   return person;
    // };

    // const onError = (error: any): void => {
    //   throw error;
    // };

    // const person = await mongooseTransactionHandler<any>(
    //   transactionHandlerMethod,
    //   onError,
    //   this.connection,
    // );

    // return person;
  }

  async remove(id: string) {
    const deletedPerson = await this.personModel.findByIdAndDelete(id);
    if (!deletedPerson) {
      throw new NotFoundException(`Person #${id} not found`);
    }
    return deletedPerson;
  }
}
