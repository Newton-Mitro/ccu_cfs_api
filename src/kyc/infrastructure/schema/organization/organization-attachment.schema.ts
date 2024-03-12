import { Prop, Schema } from '@nestjs/mongoose';
import { OrganizationalDocumentType } from 'src/kyc/domain/common/enums/kyc-attachment-type.enum';

@Schema()
export class OrganizationAttachmentSchema {
  @Prop({
    require: true,
    type: String,
    enum: Object.values(OrganizationalDocumentType),
  })
  DocumentTitle: OrganizationalDocumentType;

  @Prop({ required: true, type: String })
  DocumentUrl: string;
}
