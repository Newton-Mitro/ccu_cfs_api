import { IsEmail, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class ContactPersonDTO {
  @IsOptional()
  @IsString()
  // @Expose({ name: 'contact_person_pin' })
  ContactPersonPIN: string;

  @IsString()
  @IsNotEmpty()
  // @Expose({ name: 'contact_person_name' })
  ContactPersonName: string;

  @IsString()
  @IsNotEmpty()
  // @Expose({ name: 'contact_number' })
  ContactNumber: string;

  @IsString()
  @IsOptional()
  // @Expose({ name: 'emergency_contact_name' })
  EmergencyContactNumber: string;

  @IsString()
  @IsOptional()
  @IsEmail()
  // @Expose({ name: 'email' })
  Email: string;
}
