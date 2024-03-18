import { Injectable, NotFoundException } from '@nestjs/common';
import { CommandBus } from '@nestjs/cqrs';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EmailMessagingRepository } from 'src/messaging/infrastructure/repositories/email-messaging.repository';
import {
  PERSON_MODEL,
  PersonDocument,
} from '../../infrastructure/schema/person/person.schema';
import { CreatePersonRequest } from '../../presentation/contract/person/request/create-person.request';
import { UpdatePersonRequest } from '../../presentation/contract/person/request/update-person.request';
import { CreatePersonCommand } from '../commands/person/create-person/create-person.command';

@Injectable()
export class PeoplesService {
  constructor(
    private commandBus: CommandBus,

    @InjectModel(PERSON_MODEL)
    private readonly personModel: Model<PersonDocument>,
    private readonly emailService: EmailMessagingRepository,
  ) {}

  async create(createPersonRequest: CreatePersonRequest) {
    return this.commandBus.execute(
      new CreatePersonCommand(
        createPersonRequest.NameEn,
        createPersonRequest.NameBn,
        createPersonRequest.DateOfBirth,
        createPersonRequest.Gender,
        createPersonRequest.BloodGroup,
        createPersonRequest.Religion,
        createPersonRequest.NID,
        createPersonRequest.BirthRegistrationNumber,
        createPersonRequest.MaritalStatus,
        createPersonRequest.ContactNumber,
        createPersonRequest.MobileNumber,
        createPersonRequest.PhoneNumber,
        createPersonRequest.Email,
        createPersonRequest.Profession,
        createPersonRequest.Photo,
      ),
    );

    // const createdPerson = new this.personModel(createPersonRequest);
    // createdPerson._id = new Types.ObjectId();
    // createdPerson.IdentificationNumber = String(new Date().valueOf()).substring(
    //   3,
    //   13,
    // );

    // createdPerson.Photo = {
    //   _id: new Types.ObjectId(),
    //   DocumentTitle: createPersonRequest.Photo.DocumentTitle,
    //   FileUrl: StoreBase64File.store(
    //     'persons/photo',
    //     createPersonRequest.NameEn,
    //     createPersonRequest.Photo.FileExtension,
    //     createPersonRequest.Photo.Base64Document,
    //   ),
    // };

    // const errors = createdPerson.validateSync();

    // if (errors) {
    //   const invalidFields = Object.keys(errors.errors);
    //   const validationErrors = invalidFields.map(
    //     (fieldName) => errors.errors[fieldName].message,
    //   );

    //   const result = {
    //     message: validationErrors,
    //     error: errors.name,
    //     statusCode: HttpStatus.BAD_REQUEST,
    //   };
    //   throw new BadRequestException(result);
    // }

    // // Unique NID Check

    // // Unique BirthRegistrationNumber Check

    // const person = await createdPerson.save();

    // const per = JSON.stringify(person);
    // const emailMessage = {
    //   from: '"CCU_CFS" <noreply@domain.com>',
    //   to: 'newtonmitro@gmail.com',
    //   subject: 'Person Created',
    //   // text: 'Test Body',
    //   // html: '<h1>Hello world.</h1>',
    //   template: 'person-created',
    //   context: { name: createPersonRequest.NameEn, per },
    // };

    // // const emailMessage = {
    // //   from: '"Credit Solution" <info@cccul.com>',
    // //   to: 'newtonmitro@gmail.com',
    // //   subject: 'Test Subject',
    // //   text: 'Test Body',
    // //   html: '<h1>Hello world.</h1>',
    // // };

    // const res = await this.emailService.sendEmail(emailMessage);

    // return person;
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
