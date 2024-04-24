import { AuthUserType } from '../../../../common/domain/types/auth-user.type';

export type OrganizationProps = {
  organizationId: string;
  identificationNumber: string;
  registrationNumber: string;
  tin: string;
  nameEn: string;
  nameBn: string;
  email: string;
  contactNumber: string;
  mobileNumber: string;
  phoneNumber: string;
  fax: string;
  website: string;
  logo: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: AuthUserType | null;
  updatedBy: AuthUserType | null;
};
