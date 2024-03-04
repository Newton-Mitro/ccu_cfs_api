import { BadRequestException } from '@nestjs/common';

export class DateUtil {
  static ageFromDateOfBirthday(dateOfBirth: string): number {
    const today = new Date();
    try {
      const birthDate = new Date(dateOfBirth);
      let age = today.getFullYear() - birthDate.getFullYear();
      const m = today.getMonth() - birthDate.getMonth();

      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }

      return age;
    } catch (error) {
      throw new BadRequestException(error);
    }
  }
}
