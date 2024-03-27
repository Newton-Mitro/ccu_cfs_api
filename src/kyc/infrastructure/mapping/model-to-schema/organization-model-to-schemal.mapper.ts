import { Types } from 'mongoose';
import { ISchemaMapper } from 'src/common/database/mongoose/schema.mapper';
import { AddressModel } from 'src/kyc/domain/models/common/address.model';
import { BankAccountModel } from 'src/kyc/domain/models/organization/models/bank-account.model';
import { BranchModel } from 'src/kyc/domain/models/organization/models/branch.model';
import { ContactPersonModel } from 'src/kyc/domain/models/organization/models/contact-person.model';
import { OrganizationAttachmentModel } from 'src/kyc/domain/models/organization/models/organization-attachment.model';
import { OrganizationAggregate } from 'src/kyc/domain/models/organization/organization.aggregate';
import { Organization } from '../../schema/organization/organization.schema';

export class OrganizationModelToSchemaMapper
  implements ISchemaMapper<Organization, OrganizationAggregate>
{
  mapBusinessModelToSchema(model: OrganizationAggregate): Organization {
    const organizationSchema = new Organization();
    organizationSchema.IdentificationNumber =
      model.Organization.IdentificationNumber;
    organizationSchema.NameEn = model.Organization.NameEn;
    organizationSchema.NameBn = model.Organization.NameBn;
    organizationSchema.ContactNumber = model.Organization.ContactNumber;
    organizationSchema.PhoneNumber = model.Organization.PhoneNumber;
    organizationSchema.MobileNumber = model.Organization.MobileNumber;
    organizationSchema.Email = model.Organization.Email;
    organizationSchema.RegistrationNumber =
      model.Organization.RegistrationNumber;
    organizationSchema.Fax = model.Organization.Fax;
    organizationSchema.Website = model.Organization.Website;
    organizationSchema.Logo = model.Organization.Logo;

    organizationSchema.Addresses = model.Addresses?.map(
      (address: AddressModel) => ({
        _id: new Types.ObjectId(address.AddressId),
        AddressType: address.AddressType,
        AddressLineOne: address.AddressLineOne,
        AddressLineTwo: address.AddressLineTwo,
        Country: address.Country,
        State: address.State,
        City: address.City,
        Division: address.Division,
        District: address.District,
        SubDistrict: address.SubDistrict,
        ZipCode: address.ZipCode,
        CreatedAt: address.CreatedAt,
        UpdatedAt: address.UpdatedAt,
        CreatedBy: address.CreatedBy,
        UpdatedBy: address.UpdatedBy,
      }),
    );

    organizationSchema.Branches = model.Branches?.map(
      (branch: BranchModel) => ({
        _id: new Types.ObjectId(branch.BranchId),
        OrganizationId: branch.OrganizationId,
        IdentificationNumber: branch.IdentificationNumber,
        RegistrationNumber: branch.RegistrationNumber,
        TIN: branch.TIN,
        Logo: branch.Logo,
        NameEn: branch.NameEn,
        NameBn: branch.NameBn,
        Email: branch.Email,
        ContactNumber: branch.ContactNumber,
        MobileNumber: branch.MobileNumber,
        PhoneNumber: branch.PhoneNumber,
        Fax: branch.Fax,
        Website: branch.Website,
        CreatedAt: branch.CreatedAt,
        UpdatedAt: branch.UpdatedAt,
        CreatedBy: branch.CreatedBy,
        UpdatedBy: branch.UpdatedBy,
      }),
    );

    organizationSchema.ContactPeoples = model.ContactPeoples?.map(
      (contactPerson: ContactPersonModel) => ({
        _id: new Types.ObjectId(contactPerson.ContactPersonId),
        PersonId: contactPerson.PersonId,
        IdentificationNumber: contactPerson.IdentificationNumber,
        NameEn: contactPerson.NameEn,
        NameBn: contactPerson.NameBn,
        Email: contactPerson.Email,
        ContactNumber: contactPerson.ContactNumber,
        MobileNumber: contactPerson.MobileNumber,
        PhoneNumber: contactPerson.PhoneNumber,
        DateOfBirth: new Date(contactPerson.DateOfBirth),
        Gender: contactPerson.Gender,
        BloodGroup: contactPerson.BloodGroup,
        Religion: contactPerson.Religion,
        Profession: contactPerson.Profession,
        NID: contactPerson.NID,
        BirthRegistrationNumber: contactPerson.BirthRegistrationNumber,
        MaritalStatus: contactPerson.MaritalStatus,
        CreatedAt: contactPerson.CreatedAt,
        UpdatedAt: contactPerson.UpdatedAt,
        CreatedBy: contactPerson.CreatedBy,
        UpdatedBy: contactPerson.UpdatedBy,
      }),
    );

    organizationSchema.BankAccounts = model.BankAccounts?.map(
      (bankAccount: BankAccountModel) => ({
        _id: new Types.ObjectId(bankAccount.BankAccountId),
        BankName: bankAccount.BankName,
        Branch: bankAccount.Branch,
        RoutingNumber: bankAccount.RoutingNumber,
        AccountNumber: bankAccount.AccountNumber,
        AccountName: bankAccount.AccountName,
        CreatedAt: bankAccount.CreatedAt,
        UpdatedAt: bankAccount.UpdatedAt,
        CreatedBy: bankAccount.CreatedBy,
        UpdatedBy: bankAccount.UpdatedBy,
      }),
    );

    organizationSchema.Attachments = model.Attachments?.map(
      (organizationAttachment: OrganizationAttachmentModel) => ({
        _id: new Types.ObjectId(organizationAttachment.AttachmentId),
        DocumentTitle: organizationAttachment.DocumentTitle,
        FileUrl: organizationAttachment.FileUrl,
        CreatedAt: organizationAttachment.CreatedAt,
        UpdatedAt: organizationAttachment.UpdatedAt,
        CreatedBy: organizationAttachment.CreatedBy,
        UpdatedBy: organizationAttachment.UpdatedBy,
      }),
    );

    return organizationSchema;
  }
}
