import { Types } from 'mongoose';
import { ISchemaMapper } from 'src/common/database/mongoose/schema.mapper';
import { AddressModel } from 'src/kyc/domain/models/common/address.model';
import { BankAccountModel } from 'src/kyc/domain/models/organization/models/bank-account.model';
import { BranchModel } from 'src/kyc/domain/models/organization/models/branch.model';
import { ContactPersonModel } from 'src/kyc/domain/models/organization/models/contact-person.model';
import { OrganizationAttachmentModel } from 'src/kyc/domain/models/organization/models/organization-attachment.model';
import { OrganizationAggregate } from '../../../domain/models/organization/organization.aggregate';
import { Organization } from '../../schema/organization/organization.schema';

export class OrganizationAggregateToSchemaMapper
  implements ISchemaMapper<Organization, OrganizationAggregate>
{
  mapAggregateToSchema(model: OrganizationAggregate): Organization {
    const organizationSchema = new Organization();
    organizationSchema.identificationNumber = model.identificationNumber;
    organizationSchema.nameEn = model.nameEn;
    organizationSchema.nameBn = model.nameBn;
    organizationSchema.contactNumber = model.contactNumber;
    organizationSchema.phoneNumber = model.phoneNumber;
    organizationSchema.mobileNumber = model.mobileNumber;
    organizationSchema.email = model.email;
    organizationSchema.registrationNumber = model.registrationNumber;
    organizationSchema.fax = model.fax;
    organizationSchema.website = model.website;
    organizationSchema.logo = model.logo;

    organizationSchema.addresses = model.addresses?.map(
      (address: AddressModel) => ({
        _id: new Types.ObjectId(address.addressId),
        ...address,
      }),
    );

    organizationSchema.branches = model.branches?.map(
      (branch: BranchModel) => ({
        _id: new Types.ObjectId(branch.branchId),
        ...branch,
      }),
    );

    organizationSchema.contactPeoples = model.contactPeoples?.map(
      (contactPerson: ContactPersonModel) => ({
        _id: new Types.ObjectId(contactPerson.contactPersonId),
        ...contactPerson,
      }),
    );

    organizationSchema.bankAccounts = model.bankAccounts?.map(
      (bankAccount: BankAccountModel) => ({
        _id: new Types.ObjectId(bankAccount.bankAccountId),
        ...bankAccount,
      }),
    );

    organizationSchema.attachments = model.attachments?.map(
      (organizationAttachment: OrganizationAttachmentModel) => ({
        _id: new Types.ObjectId(organizationAttachment.attachmentId),
        ...organizationAttachment,
      }),
    );

    return organizationSchema;
  }
}
