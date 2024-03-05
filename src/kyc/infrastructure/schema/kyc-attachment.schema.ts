import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AttachmentType } from 'src/kyc/domain/enum/attachment-type.enum';
import { FileExtension } from 'src/kyc/domain/enum/file-extension.enum';

@Schema()
export class KycAttachment {
  @Prop({
    require: true,
    type: String,
    enum: Object.values(AttachmentType),
  })
  attachmentType: AttachmentType;

  @Prop({ require: true, type: String, enum: Object.values(FileExtension) })
  fileExtension: FileExtension;

  @Prop({ require: true })
  fileContent: string;
}

export type KycAttachmentDocument = KycAttachment & Document;
export const KYC_ATTACHMENT_MODEL = KycAttachment.name;

export const KycAttachmentSchema = SchemaFactory.createForClass(KycAttachment);
