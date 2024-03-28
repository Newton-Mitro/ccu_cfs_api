import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { FindAllQueryRequest } from 'src/common/contract/find-all-query.dto';
import { EntityRepository } from 'src/common/database/mongoose/entity.repository';
import { PersonAggregate } from '../../domain/models/person/person.aggregate';
import { PersonModelToSchemaMapper } from '../mapping/model-to-schema/person-model-to-schema.mapper';
import { PersonSchemaToModelMapper } from '../mapping/schema-to-model/person-schema-to-model.mapper';
import {
  PERSON_MODEL,
  Person,
  PersonDocument,
} from '../schema/person/person.schema';

@Injectable()
export class PeoplesRepository extends EntityRepository<
  Person,
  PersonAggregate
> {
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
  ): Promise<PersonAggregate[]> {
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

  async findById(id: string): Promise<PersonAggregate | null> {
    const customer = await this.personDocument.findById(new Types.ObjectId(id));
    if (customer) {
      return this.personBusinessModelMapper.mapSchemaToBusinessModel(customer);
    }
    return null;
  }

  async findByNID(nid: string): Promise<PersonAggregate | null> {
    const customer = await this.personDocument.findOne({ nid });
    if (customer) {
      return this.personBusinessModelMapper.mapSchemaToBusinessModel(customer);
    }
    return null;
  }

  async findByMobileNumber(
    mobileNumber: string,
  ): Promise<PersonAggregate | null> {
    const customer = await this.personDocument.findOne({ mobileNumber });
    if (customer) {
      return this.personBusinessModelMapper.mapSchemaToBusinessModel(customer);
    }
    return null;
  }

  async findByBNR(
    birthRegistrationNumber: string,
  ): Promise<PersonAggregate | null> {
    const customer = await this.personDocument.findOne({
      birthRegistrationNumber,
    });
    if (customer) {
      return this.personBusinessModelMapper.mapSchemaToBusinessModel(customer);
    }
    return null;
  }

  async findByEmail(email: string): Promise<PersonAggregate | null> {
    const customer = await this.personDocument.findOne({ email });
    if (customer) {
      return this.personBusinessModelMapper.mapSchemaToBusinessModel(customer);
    }
    return null;
  }

  async createPerson(personModel: PersonAggregate): Promise<PersonAggregate> {
    const personSchema =
      this.personSchemaMapper.mapBusinessModelToSchema(personModel);
    const personDoc = new this.personDocument(personSchema);
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
    const savedPersonSchema = await personDoc.save();

    return this.personBusinessModelMapper.mapSchemaToBusinessModel(
      savedPersonSchema,
    );
  }
}
