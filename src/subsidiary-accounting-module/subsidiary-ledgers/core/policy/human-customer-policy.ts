import { BadRequestException } from '@nestjs/common';
import { DateUtil } from 'src/common/utils/date.util';
import { CustomerSubstitute } from '../enum/customer-substitute.enum';
import { BaseCustomerModel } from '../model/base-customer.model';
import { HumanCustomerModel } from '../model/human-customer.model';
import { NomineeModel } from '../model/nominee.model';
import { CustomerType } from 'src/kyc/core/enum/customer-type.enum';
import { Religion } from 'src/kyc/core/enum/religion.enum';

export class CustomerPolicy {
  public static CustomerTypeCheck(
    humanCustomerModel: BaseCustomerModel,
    customerType: CustomerType,
    customerSubstitute: CustomerSubstitute,
  ) {
    if (humanCustomerModel.CustomerType !== customerType) {
      throw new BadRequestException(
        `${customerSubstitute} need to be a ${customerType.toLowerCase()}.`,
      );
    }
  }

  public static ReligionCheck(
    humanCustomerModel: HumanCustomerModel,
    religion: Religion,
    customerSubstitute: CustomerSubstitute,
  ) {
    if (humanCustomerModel.Religion !== religion) {
      throw new BadRequestException(
        `${customerSubstitute} need to be ${religion.toLowerCase()}.`,
      );
    }
  }

  public static NIDandBRNCheck(
    humanCustomerModel: HumanCustomerModel,
    customerSubstitute: CustomerSubstitute,
  ) {
    if (
      humanCustomerModel.NID === '' &&
      humanCustomerModel.BirthRegistrationNumber === ''
    ) {
      throw new BadRequestException(
        `Please provide ${customerSubstitute.toLowerCase()} NID or BRN.`,
      );
    }
  }

  public static NIDCheck(
    humanCustomerModel: HumanCustomerModel,
    customerSubstitute: CustomerSubstitute,
  ) {
    if (humanCustomerModel.NID === '') {
      throw new BadRequestException(
        `Please provide ${customerSubstitute.toLowerCase()} NID.`,
      );
    }
  }

  public static BRNCheck(
    humanCustomerModel: HumanCustomerModel,
    customerSubstitute: CustomerSubstitute,
  ) {
    if (humanCustomerModel.BirthRegistrationNumber === '') {
      throw new BadRequestException(
        `Please provide ${customerSubstitute.toLowerCase()} BRN.`,
      );
    }
  }

  public static DateOfBirthCheck(
    humanCustomerModel: HumanCustomerModel,
    customerSubstitute: CustomerSubstitute,
  ) {
    if (humanCustomerModel.DateOfBirth === null) {
      throw new BadRequestException(
        `Please provide ${customerSubstitute.toLowerCase()} date of birth.`,
      );
    }
  }

  public static AgeCheck(
    humanCustomerModel: HumanCustomerModel,
    ageLimit: number,
    customerSubstitute: CustomerSubstitute,
  ) {
    this.DateOfBirthCheck(humanCustomerModel, customerSubstitute);
    const age: number = DateUtil.ageFromDateOfBirthday(
      humanCustomerModel.DateOfBirth,
    );

    if (age < ageLimit) {
      throw new BadRequestException(
        `${customerSubstitute} age is ${age}. ${customerSubstitute} need to be ${ageLimit} years old.`,
      );
    }

    this.NIDandBRNCheck(humanCustomerModel, customerSubstitute);
  }

  public static HasSavingAccountCheck(
    humanCustomerModel: HumanCustomerModel,
    anyService: any,
    customerSubstitute: CustomerSubstitute,
  ) {
    const introducerSavingAccount: string = 'SAV-00123';
    if (humanCustomerModel.SavingAccountNumber !== introducerSavingAccount) {
      throw new BadRequestException(
        `${customerSubstitute} saving account don't match with this (${introducerSavingAccount}) account.`,
      );
    }
  }

  public static NomineesPercentCheck(
    nominees: NomineeModel[],
    customerSubstitute: CustomerSubstitute,
  ) {
    if (nominees.length > 0) {
      let totalPercent: number = 0;
      nominees.forEach((nominee) => {
        totalPercent = totalPercent + nominee.Percent;
        this.NIDandBRNCheck(nominee, customerSubstitute);
      });

      if (totalPercent !== 100) {
        throw new BadRequestException(
          `${customerSubstitute} total percent should be 100%. but given percent is (${totalPercent}%) which does not match.`,
        );
      }
    }
  }
}
