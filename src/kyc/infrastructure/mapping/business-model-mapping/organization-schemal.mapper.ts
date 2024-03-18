import { Types } from 'mongoose';
import { ISchemaMapper } from 'src/config/database/mongoose/schema.mapper';
import { AddressEntity } from 'src/kyc/domain/models/common/address.entity';
import { BankAccountEntity } from 'src/kyc/domain/models/organization/entities/bank-account.entity';
import { BranchEntity } from 'src/kyc/domain/models/organization/entities/branch.entity';
import { ContactPersonEntity } from 'src/kyc/domain/models/organization/entities/contact-person.entity';
import { OrganizationAttachmentEntity } from 'src/kyc/domain/models/organization/entities/organization-attachment.entity';
import { OrganizationModel } from 'src/kyc/domain/models/organization/organization.aggregate';
import { Organization } from '../../schema/organization/organization.schema';

export class OrganizationSchemaMapper
  implements ISchemaMapper<Organization, OrganizationModel>
{
  mapBusinessModelToSchema(model: OrganizationModel): Organization {
    const organizationSchema = new Organization();
    organizationSchema.IdentificationNumber = model.IdentificationNumber;
    organizationSchema.NameEn = model.NameEn;
    organizationSchema.NameBn = model.NameBn;
    organizationSchema.ContactNumber = model.ContactNumber;
    organizationSchema.PhoneNumber = model.PhoneNumber;
    organizationSchema.MobileNumber = model.MobileNumber;
    organizationSchema.Email = model.Email;

    organizationSchema.RegistrationNumber = model.RegistrationNumber;
    organizationSchema.FaxNumber = model.FaxNumber;
    organizationSchema.Website = model.Website;
    organizationSchema.Logo = model.Logo && {
      _id: new Types.ObjectId(model.Logo.Id),
      DocumentTitle: model.Logo.DocumentTitle,
      FileUrl: model.Logo.FileUrl,
    };

    organizationSchema.Addresses = model.Addresses?.map(
      (address: AddressEntity) => ({
        _id: new Types.ObjectId(address.Id),
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
      }),
    );

    organizationSchema.Branches = model.Branches?.map(
      (branch: BranchEntity) => ({
        _id: new Types.ObjectId(branch.Id),
        OrganizationId: branch.OrganizationId,
        IdentificationNumber: branch.IdentificationNumber,
        RegistrationNumber: branch.RegistrationNumber,
        NameEn: branch.NameEn,
        NameBn: branch.NameBn,
        Email: branch.Email,
        ContactNumber: branch.ContactNumber,
        MobileNumber: branch.MobileNumber,
        PhoneNumber: branch.PhoneNumber,
        FaxNumber: branch.FaxNumber,
        Website: branch.Website,
      }),
    );

    organizationSchema.ContactPeoples = model.ContactPeoples?.map(
      (contactPerson: ContactPersonEntity) => ({
        _id: new Types.ObjectId(contactPerson.Id),
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
      }),
    );

    organizationSchema.BankAccounts = model.BankAccounts?.map(
      (branch: BankAccountEntity) => ({
        _id: new Types.ObjectId(branch.Id),
        BankName: branch.BankName,
        Branch: branch.Branch,
        RoutingNumber: branch.RoutingNumber,
        AccountNumber: branch.AccountNumber,
        AccountName: branch.AccountName,
      }),
    );

    organizationSchema.Attachments = model.Attachments?.map(
      (organizationAttachment: OrganizationAttachmentEntity) => ({
        _id: new Types.ObjectId(organizationAttachment.Id),
        DocumentTitle: organizationAttachment.DocumentTitle,
        FileUrl: organizationAttachment.FileUrl,
      }),
    );

    return organizationSchema;
  }
}
