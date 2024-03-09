import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { KYCAttachmentType } from 'src/kyc/domain/common/enums/kyc-attachment-type.enum';

@Schema()
export class KYCAttachment {
  @Prop({
    require: true,
    type: String,
    enum: Object.values(KYCAttachmentType),
  })
  DocumentTitle: KYCAttachmentType;

  @Prop()
  DocumentUrl: string;
}


export const KYCAttachmentSchema = SchemaFactory.createForClass(KYCAttachment);
