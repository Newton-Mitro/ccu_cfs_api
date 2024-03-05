import { PartialType } from '@nestjs/mapped-types';
import { CreateKycAttachmentDTO } from './create-kyc-attachment.dto';

export class UpdateKycAttachmentDTO extends PartialType(
  CreateKycAttachmentDTO,
) {}
