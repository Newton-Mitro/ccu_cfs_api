import { AuthUserType } from '../../../../common/types/auth-user.type';

export type BankAccountProps = {
  bankAccountId: string;
  bankName: string;
  branch: string;
  routingNumber: string;
  accountNumber: string;
  accountName: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: AuthUserType | null;
  updatedBy: AuthUserType | null;
};
