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
  ORGANIZATION_MODEL,
  OrganizationDocument,
} from '../../infrastructure/schema/organization/organization.schema';
import { CreateOrganizationRequest } from '../contract/organization/request/create-organization.request';
import { UpdateOrganizationRequest } from '../contract/organization/request/update-organization.request';

@Injectable()
export class OrganizationsService {
  constructor(
    @InjectModel(ORGANIZATION_MODEL)
    private readonly organizationModel: Model<OrganizationDocument>,
  ) {}

  async create(createOrganizationRequest: CreateOrganizationRequest) {
    const createOrganizationModel = new this.organizationModel(
      createOrganizationRequest,
    );
    createOrganizationModel._id = new Types.ObjectId();
    createOrganizationModel.IdentificationNumber = String(
      new Date().valueOf(),
    ).substring(3, 13);

    createOrganizationModel.Logo = {
      _id: new Types.ObjectId(),
      DocumentTitle: createOrganizationModel.Logo.DocumentTitle,
      FileUrl: StoreBase64File.store(
        'organizations/logo',
        createOrganizationModel.NameEn,
        createOrganizationRequest.logo.fileExtension,
        createOrganizationRequest.logo.base64Document,
      ),
    };

    const errors = createOrganizationModel.validateSync();

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

    const person = await createOrganizationModel.save();
    return person;
  }

  async findAll() {
    const resultPerPage = 5;
    const page = 1 - 1;
    const organizations = await this.organizationModel
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

    return organizations;
  }

  async findOne(id: string) {
    const existingOrganization = await this.organizationModel.findById(id);
    if (!existingOrganization) {
      throw new NotFoundException(`Organization #${id} not found`);
    }
    return existingOrganization;
  }

  async update(
    id: string,
    updateOrganizationRequest: UpdateOrganizationRequest,
  ) {
    const updatedOrganization = await this.organizationModel.findByIdAndUpdate(
      id,
      updateOrganizationRequest,
      { new: true },
    );
    if (!updatedOrganization) {
      throw new NotFoundException(`Organization #${id} not found`);
    }
    return updatedOrganization;
  }

  async remove(id: string) {
    const removedOrganization = await this.organizationModel.findById(id);
    if (!removedOrganization) {
      throw new NotFoundException(`Organization #${id} not found`);
    }
    return removedOrganization;
  }
}
