import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { BloodGroup } from 'src/kyc/domain/enum/blood-group.enum';

export class CreateKycAttachmentDTO {
  @IsString()
  @IsNotEmpty()
  customerId: string;

  @IsString()
  attachmentType: string;

  @IsString({ each: true })
  @IsEnum(BloodGroup)
  fileExtension: string;

  @IsString()
  fileContent: string;
}
