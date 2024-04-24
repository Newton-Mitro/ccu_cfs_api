import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IdentifiableEntitySchema } from '../../../../common/infrastructure/schemas/identifiable-entity.schema';
import { OrganizationalDocumentType } from '../../../shared/domain/enums/kyc-attachment-type.enum';

@Schema()
export class OrganizationAttachment extends IdentifiableEntitySchema {
  @Prop({
    require: true,
    type: String,
    enum: Object.values(OrganizationalDocumentType),
  })
  documentTitle: OrganizationalDocumentType;

  @Prop({ required: true, type: String })
  fileUrl: string;
}

export const OrganizationAttachmentSchema = SchemaFactory.createForClass(
  OrganizationAttachment,
);
