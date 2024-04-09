import { Types } from 'mongoose';
import { ISchemaMapper } from '../../../../common/mapper/schema.mapper';
import { AddressModel } from '../../../shared/domain/models/address.model';
import { BankAccountModel } from '../../domain/models/bank-account.model';
import { BranchModel } from '../../domain/models/branch.model';
import { ContactPersonModel } from '../../domain/models/contact-person.model';
import { OrganizationAttachmentModel } from '../../domain/models/organization-attachment.model';
import { OrganizationAggregate } from '../../domain/models/organization.aggregate';
import { Organization } from '../schema/organization.schema';

export class OrganizationAggregateToSchemaMapper
  implements ISchemaMapper<Organization, OrganizationAggregate>
{
  mapAggregateToSchema(model: OrganizationAggregate): Organization {
    const organizationSchema = new Organization();
    organizationSchema._id = new Types.ObjectId(model.organizationId);
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
