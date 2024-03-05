import { Injectable } from '@nestjs/common';
import { CreateKycAttachmentDTO } from '../presentation/dto/create-kyc-attachment.dto';
import { UpdateKycAttachmentDTO } from '../presentation/dto/update-kyc-attachment.dto';

@Injectable()
export class KycAttachmentsService {
  create(createKycAttachmentDTO: CreateKycAttachmentDTO) {
    return 'This action adds a new kycAttachment';
  }

  findAll() {
    return `This action returns all kycAttachments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} kycAttachment`;
  }

  update(id: number, updateKycAttachmentDTO: UpdateKycAttachmentDTO) {
    return `This action updates a #${id} kycAttachment`;
  }

  remove(id: number) {
    return `This action removes a #${id} kycAttachment`;
  }
}
