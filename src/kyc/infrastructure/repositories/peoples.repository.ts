import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { FindAllQueryRequest } from 'src/common/contract/find-all-query.dto';
import { EntityRepository } from 'src/config/database/mongoose/entity.repository';
import { CustomerModel } from 'src/kyc/domain/models/common/customer.model';
import { PersonModel } from 'src/kyc/domain/models/person/person.aggregate';
import { PersonModelToSchemaMapper } from '../mapping/model-to-schema/person-model-to-schema.mapper';
import { PersonSchemaToModelMapper } from '../mapping/schema-to-model/person-schema-to-model.mapper';
import {
  PERSON_MODEL,
  Person,
  PersonDocument,
} from '../schema/person/person.schema';

@Injectable()
export class PeoplesRepository extends EntityRepository<Person, PersonModel> {
  constructor(
    @InjectModel(PERSON_MODEL)
    private readonly personDocument: Model<PersonDocument>,
    private readonly personSchemaMapper: PersonModelToSchemaMapper,
    private readonly personBusinessModelMapper: PersonSchemaToModelMapper,
  ) {
    super(personDocument, personSchemaMapper, personBusinessModelMapper);
  }

  async findAll(
    findAllQueryDto: FindAllQueryRequest,
  ): Promise<CustomerModel[]> {
    const { order_by, limit, page, sort_by } = findAllQueryDto;

    const customers = await this.personDocument
      .find()
      .sort({ [sort_by]: order_by })
      .limit(limit)
      .skip(limit * (page - 1));

    return customers.map((customerSchema) =>
      this.personBusinessModelMapper.mapSchemaToBusinessModel(customerSchema),
    );
  }

  async findById(id: string): Promise<CustomerModel | null> {
    const customer = await this.personDocument.findById(new Types.ObjectId(id));
    if (customer) {
      return this.personBusinessModelMapper.mapSchemaToBusinessModel(customer);
    }
    return null;
  }

  async createPerson(personModel: PersonModel): Promise<any> {
    const personSchema =
      this.personSchemaMapper.mapBusinessModelToSchema(personModel);

    const personDoc = new this.personDocument(personSchema);
    // createdPerson._id = new Types.ObjectId();

    const errors = personDoc.validateSync();

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

    const savedPersonSchema = await personDoc.save();

    return this.personBusinessModelMapper.mapSchemaToBusinessModel(
      savedPersonSchema,
    );

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
  }
}
