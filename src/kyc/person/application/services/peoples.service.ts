import { Injectable, NotFoundException } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  PERSON_MODEL,
  PersonDocument,
} from '../../infrastructure/schema/person.schema';
import {
  AddPersonCommand,
  PersonPhotoAttachment,
} from '../commands/add-person/add-person.command';
import { UpdatePersonCommand } from '../commands/update-person/update-person.command';
import { CreatePersonRequest } from '../contract/requests/create-person.request';
import { UpdatePersonRequest } from '../contract/requests/update-person.request';

@Injectable()
export class PeoplesService {
  constructor(
    private commandBus: CommandBus,
    private queryBus: QueryBus,
    @InjectModel(PERSON_MODEL)
    private readonly personModel: Model<PersonDocument>,
  ) {}

  async create(
    user: any,
    createdAt,
    updatedAt,
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

  async findAll() {
    const resultPerPage = 5;
    const firstPage = 0;
    const lastPage = 0;
    let totalDocuments: number = 0;
    this.personModel
      .countDocuments({})
      .then((docCount) => {
        totalDocuments = docCount;
      })
      .catch((err) => {
        //handle possible errors
      });

    const currentPage = 1 - 1;
    const peoples = await this.personModel
      .find({})
      .select([
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
      ])
      .sort({ nameEn: 'asc' })
      .limit(resultPerPage)
      .skip(resultPerPage * currentPage);

    return peoples;
  }

  async findOne(id: string) {
    const existingPerson = await this.personModel.findById(id);
    if (!existingPerson) {
      throw new NotFoundException(`Person #${id} not found`);
    }
    return existingPerson;
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
    const deletedPerson = await this.personModel.findByIdAndDelete(id);
    if (!deletedPerson) {
      throw new NotFoundException(`Person #${id} not found`);
    }
    return deletedPerson;
  }
}
