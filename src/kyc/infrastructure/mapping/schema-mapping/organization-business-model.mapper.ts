import { IBusinessModelMapper } from 'src/config/database/mongoose/business-model.mapper';
import { AddressEntity } from 'src/kyc/domain/models/common/address.entity';
import { BankAccountEntity } from 'src/kyc/domain/models/organization/entities/bank-account.entity';
import { BranchEntity } from 'src/kyc/domain/models/organization/entities/branch.entity';
import { ContactPersonEntity } from 'src/kyc/domain/models/organization/entities/contact-person.entity';
import { OrganizationAttachmentEntity } from 'src/kyc/domain/models/organization/entities/organization-attachment.entity';
import { OrganizationModel } from 'src/kyc/domain/models/organization/organization.aggregate';
import { Address } from '../../schema/common/address.schema';
import { BankAccount } from '../../schema/organization/bank-account.schema';
import { Branch } from '../../schema/organization/branch.schema';
import { ContactPerson } from '../../schema/organization/contact-person.schema';
import { OrganizationAttachment } from '../../schema/organization/organization-attachment.schema';
import { Organization } from '../../schema/organization/organization.schema';

export class OrganizationBusinessModelMapper
  implements IBusinessModelMapper<Organization, OrganizationModel>
{
  mapSchemaToBusinessModel(entitySchema: Organization): OrganizationModel {
    const organizationModel = new OrganizationModel();
    organizationModel.CustomerId = entitySchema._id.toHexString();
    organizationModel.IdentificationNumber = entitySchema.IdentificationNumber;
    organizationModel.NameEn = entitySchema.NameEn;
    organizationModel.NameBn = entitySchema.NameBn;
    organizationModel.ContactNumber = entitySchema.ContactNumber;
    organizationModel.PhoneNumber = entitySchema.PhoneNumber;
    organizationModel.MobileNumber = entitySchema.MobileNumber;
    organizationModel.Email = entitySchema.Email;

    organizationModel.RegistrationNumber = entitySchema.RegistrationNumber;
    organizationModel.FaxNumber = entitySchema.FaxNumber;
    organizationModel.Website = entitySchema.Website;
    organizationModel.Logo = new OrganizationAttachmentEntity(
      entitySchema.Logo._id.toHexString(),
      entitySchema.Logo.DocumentTitle,
      entitySchema.Logo.FileUrl,
    );

    organizationModel.Addresses = entitySchema.Addresses?.map(
      (address: Address) => {
        return new AddressEntity(
          address._id.toHexString(),
          address.AddressType,
          address.AddressLineOne,
          address.AddressLineTwo,
          address.Country,
          address.State,
          address.City,
          address.Division,
          address.District,
          address.SubDistrict,
          address.ZipCode,
        );
      },
    );

    organizationModel.Branches = entitySchema.Branches?.map(
      (branch: Branch) => {
        return new BranchEntity(
          branch._id.toHexString(),
          branch.OrganizationId,
          branch.IdentificationNumber,
          branch.RegistrationNumber,
          branch.NameEn,
          branch.NameBn,
          branch.Email,
          branch.ContactNumber,
          branch.MobileNumber,
          branch.PhoneNumber,
          branch.FaxNumber,
          branch.Website,
        );
      },
    );

    organizationModel.ContactPeoples = entitySchema.ContactPeoples?.map(
      (contactPerson: ContactPerson) => {
        return new ContactPersonEntity(
          contactPerson._id.toHexString(),
          contactPerson.PersonId,
          contactPerson.IdentificationNumber,
          contactPerson.DateOfBirth.toISOString(),
          contactPerson.Gender,
          contactPerson.NameEn,
          contactPerson.NameBn,
          contactPerson.BloodGroup,
          contactPerson.Religion,
          contactPerson.MaritalStatus,
          contactPerson.Profession,
          contactPerson.ContactNumber,
          contactPerson.MobileNumber,
          contactPerson.PhoneNumber,
          contactPerson.Email,
          contactPerson.NID,
          contactPerson.BirthRegistrationNumber,
        );
      },
    );

    organizationModel.BankAccounts = entitySchema.BankAccounts?.map(
      (branch: BankAccount) => {
        return new BankAccountEntity(
          branch._id.toHexString(),
          branch.BankName,
          branch.Branch,
          branch.RoutingNumber,
          branch.AccountNumber,
          branch.AccountName,
        );
      },
    );

    organizationModel.Attachments = entitySchema.Attachments?.map(
      (personAttachment: OrganizationAttachment) => {
        return new OrganizationAttachmentEntity(
          personAttachment._id.toHexString(),
          personAttachment.DocumentTitle,
          personAttachment.FileUrl,
        );
      },
    );

    return organizationModel;
  }
}
