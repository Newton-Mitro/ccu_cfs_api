import {
  BadRequestException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  PERSON_MODEL,
  PersonDocument,
} from '../infrastructure/schema/person.schema';
import { CreatePeopleDTO } from '../presentation/contract/create-people.dto';
import { UpdatePeopleDTO } from '../presentation/contract/update-people.dto';

@Injectable()
export class PeoplesService {
  constructor(
    @InjectModel(PERSON_MODEL)
    private readonly personModel: Model<PersonDocument>,
  ) {}

  async create(createPeopleDTO: CreatePeopleDTO) {
    const createdPerson = new this.personModel(createPeopleDTO);
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
        'identificationNumber',
        'nameEn',
        'nameBn',
        'registeredEmail',
        'alternateEmail',
        'registeredMobile',
        'alternateContactNumber',
        'emergencyContactNumber',
        'dateOfBirth',
        'nid',
        'birthRegistrationNumber',
        'bloodGroup',
        'gender',
        'religion',
        'profession',
        'maritalStatus',
        'customerType',
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

  async update(id: string, updatePeopleDto: UpdatePeopleDTO) {
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
