import {
  BadRequestException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { StoreBase64File } from 'src/common/utils/store-base64-file';
import {
  PERSON_MODEL,
  PersonDocument,
} from '../infrastructure/schema/person/person.schema';
import { CreatePersonRequest } from '../presentation/contract/person/request/create-person.request';
import { UpdatePersonRequest } from '../presentation/contract/person/request/update-person.request';

@Injectable()
export class PeoplesService {
  constructor(
    @InjectModel(PERSON_MODEL)
    private readonly personModel: Model<PersonDocument>,
  ) {}

  async create(createPersonDTO: CreatePersonRequest) {
    const createdPerson = new this.personModel(createPersonDTO);
    createdPerson._id = new Types.ObjectId();
    createdPerson.IdentificationNumber = String(new Date().valueOf()).substring(
      3,
      13,
    );

    createdPerson.Photo = {
      _id: new Types.ObjectId(),
      DocumentTitle: createPersonDTO.Photo.DocumentTitle,
      FileUrl: StoreBase64File.store(
        'persons/photo',
        createPersonDTO.NameEn,
        createPersonDTO.Photo.FileExtension,
        createPersonDTO.Photo.Base64Document,
      ),
    };

    const errors = createdPerson.validateSync();

    if (errors) {
      const invalidFields = Object.keys(errors.errors);
      const validationErrors = invalidFields.map(
        (fieldName) => errors.errors[fieldName].message,
      );

      const result = {
        message: validationErrors,
        error: errors.name,
        statusCode: HttpStatus.BAD_REQUEST,
      };
      throw new BadRequestException(result);
    }

    // Unique NID Check

    // Unique BirthRegistrationNumber Check

    const person = await createdPerson.save();
    return person;
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

  async update(id: string, updatePeopleDto: UpdatePersonRequest) {
    const updatedPerson = await this.personModel.findByIdAndUpdate(
      id,
      updatePeopleDto,
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
