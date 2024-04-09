import { BadRequestException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MongooseRepository } from 'src/common/database/mongoose/mongoose.repository';
import { OrganizationAggregate } from '../../domain/models/organization.aggregate';
import { OrganizationAggregateToSchemaMapper } from '../mapping/organization-aggregate-to-schemal.mapper';
import { OrganizationSchemaToAggregateMapper } from '../mapping/organization-schema-to-aggregate.mapper';
import {
  ORGANIZATION_MODEL,
  Organization,
  OrganizationDocument,
} from '../schema/organization.schema';

@Injectable()
export class OrganizationsRepository extends MongooseRepository<
  Organization,
  OrganizationAggregate
> {
  constructor(
    @InjectModel(ORGANIZATION_MODEL)
    private readonly organizationDocument: Model<OrganizationDocument>,
    private readonly organizationSchemaMapper: OrganizationAggregateToSchemaMapper,
    private readonly organizationBusinessModelMapper: OrganizationSchemaToAggregateMapper,
  ) {
    super(
      organizationDocument,
      organizationSchemaMapper,
      organizationBusinessModelMapper,
    );
  }

  // async findAll(
  //   findAllQueryDto: FindAllQueryRequest,
  // ): Promise<PersonAggregate[]> {
  //   const { order_by, limit, page, sort_by } = findAllQueryDto;

  //   const customers = await this.personDocument
  //     .find()
  //     .sort({ [sort_by]: order_by })
  //     .limit(limit)
  //     .skip(limit * (page - 1));

  //   return customers.map((customerSchema) =>
  //     this.personBusinessModelMapper.mapSchemaToAggregate(customerSchema),
  //   );
  // }

  // async findById(id: string): Promise<PersonAggregate | null> {
  //   const customer = await this.personDocument.findById(new Types.ObjectId(id));
  //   if (customer) {
  //     return this.personBusinessModelMapper.mapSchemaToAggregate(customer);
  //   }
  //   return null;
  // }

  async findByMobileNumber(
    mobileNumber: string,
  ): Promise<OrganizationAggregate | null> {
    const customer = await this.organizationDocument.findOne({ mobileNumber });
    if (customer) {
      return this.organizationBusinessModelMapper.mapSchemaToAggregate(
        customer,
      );
    }
    return null;
  }

  async findByEmail(email: string): Promise<OrganizationAggregate | null> {
    const customer = await this.organizationDocument.findOne({ email });
    if (customer) {
      return this.organizationBusinessModelMapper.mapSchemaToAggregate(
        customer,
      );
    }
    return null;
  }

  async createOrganization(
    organizationModel: OrganizationAggregate,
  ): Promise<OrganizationAggregate> {
    const organizationSchema =
      this.organizationSchemaMapper.mapAggregateToSchema(organizationModel);
    const organizationDoc = new this.organizationDocument(organizationSchema);
    const errors = organizationDoc.validateSync();

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
    const savedOrganizationSchema = await organizationDoc.save();

    return this.organizationBusinessModelMapper.mapSchemaToAggregate(
      savedOrganizationSchema,
    );
  }

  // async findOneAndReplace(
  //   personId: string,
  //   personModel: PersonAggregate,
  // ): Promise<PersonAggregate> {
  //   const personSchema =
  //     this.personSchemaMapper.mapAggregateToSchema(personModel);

  //   const updatedEntityDocument = await this.entityModel.findOneAndReplace(
  //     { _id: new Types.ObjectId(personId) },
  //     personSchema,
  //     {
  //       new: true,
  //     },
  //   );

  //   if (!updatedEntityDocument) {
  //     throw new NotFoundException('Unable to find the entity to replace.');
  //   }

  //   return this.personBusinessModelMapper.mapSchemaToAggregate(
  //     updatedEntityDocument,
  //   );
  // }
}
