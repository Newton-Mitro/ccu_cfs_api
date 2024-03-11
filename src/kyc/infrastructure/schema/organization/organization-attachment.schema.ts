import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { OrganizationalDocumentType } from 'src/kyc/domain/common/enums/kyc-attachment-type.enum';

@Schema()
export class OrganizationAttachment {
  @Prop({
    require: true,
    type: String,
    enum: Object.values(OrganizationalDocumentType),
  })
  DocumentTitle: OrganizationalDocumentType;

  @Prop({ required: true, type: String })
  DocumentUrl: string;
}

export const OrganizationAttachmentSchema = SchemaFactory.createForClass(
  OrganizationAttachment,
);
