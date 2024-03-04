import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { KycAttachmentsService } from '../application/kyc-attachments.service';
import { CreateKycAttachmentDTO } from './dto/create-kyc-attachment.dto';
import { UpdateKycAttachmentDTO } from './dto/update-kyc-attachment.dto';

@Controller('kyc-attachments')
export class KycAttachmentsController {
  constructor(private readonly kycAttachmentsService: KycAttachmentsService) {}

  @Post()
  create(@Body() createKycAttachmentDTO: CreateKycAttachmentDTO) {
    return this.kycAttachmentsService.create(createKycAttachmentDTO);
  }

  @Get()
  findAll() {
    return this.kycAttachmentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.kycAttachmentsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateKycAttachmentDto: UpdateKycAttachmentDTO,
  ) {
    return this.kycAttachmentsService.update(+id, updateKycAttachmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.kycAttachmentsService.remove(+id);
  }
}
