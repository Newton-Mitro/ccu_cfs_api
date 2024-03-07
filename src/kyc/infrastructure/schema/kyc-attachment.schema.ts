import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { KYCAttachmentType } from 'src/kyc/domain/enum/kyc-attachment-type.enum';

@Schema()
export class KycAttachment {
  @Prop({
    require: true,
    type: String,
    enum: Object.values(KYCAttachmentType),
  })
  documentTitle: KYCAttachmentType;

  @Prop()
  documentUrl: string;

  @Prop()
  base64StringDocument: string;
}

export type KycAttachmentDocument = KycAttachment & Document;
export const KYC_ATTACHMENT_MODEL = KycAttachment.name;

export const KycAttachmentSchema = SchemaFactory.createForClass(KycAttachment);
