import { CustomerType } from 'src/kyc/domain/enum/customer-type.enum';
import { v4 as uuidv4 } from 'uuid';
export class BaseCustomerModel {
  Id: string = uuidv4();
  IdentificationNumber: string;
  NameEn: string;
  NameBn: string;
  Email: string;
  ContactNumber: string;
  SavingAccountNumber: string;
  CustomerType: CustomerType;
}
