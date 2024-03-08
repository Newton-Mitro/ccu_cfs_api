import {
  BadRequestException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';
import {
  KYC_ATTACHMENT_MODEL,
  KycAttachmentDocument,
} from '../infrastructure/schema/kyc-attachment.schema';
import {
  ORGANIZATION_MODEL,
  OrganizationDocument,
} from '../infrastructure/schema/organization.schema';
import { CreateOrganizationRequest } from '../presentation/contract/organization/create-organization.request';
import { UpdateOrganizationRequest } from '../presentation/contract/organization/update-organization.request';

@Injectable()
export class OrganizationsService {
  constructor(
    @InjectModel(ORGANIZATION_MODEL)
    private readonly organizationModel: Model<OrganizationDocument>,
    @InjectModel(KYC_ATTACHMENT_MODEL)
    private readonly kycAttachmentModel: Model<KycAttachmentDocument>,
    @InjectConnection() private readonly connection: mongoose.Connection,
  ) {}

  async create(createOrganizationDto: CreateOrganizationRequest) {
    const createOrganizationModel = new this.organizationModel(
      createOrganizationDto,
    );
    createOrganizationModel.IdentificationNumber = String(
      new Date().valueOf(),
    ).substring(3, 13);
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

  async update(id: string, updateOrganizationDto: UpdateOrganizationRequest) {
    const updatedOrganization = await this.organizationModel.findByIdAndUpdate(
      id,
      updateOrganizationDto,
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
