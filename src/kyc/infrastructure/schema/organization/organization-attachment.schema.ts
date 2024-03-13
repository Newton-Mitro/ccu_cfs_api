import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IdentifiableEntitySchema } from 'src/common/mongoose/identifiable-entity.schema';
import { OrganizationalDocumentType } from 'src/kyc/domain/enums/kyc-attachment-type.enum';

@Schema()
export class OrganizationAttachment extends IdentifiableEntitySchema {
  @Prop({
    require: true,
    type: String,
    enum: Object.values(OrganizationalDocumentType),
  })
  DocumentTitle: OrganizationalDocumentType;

  @Prop({ required: true, type: String })
  Base64Document: string;

  @Prop({ required: true, type: String })
  FileExtension: string;
}

export const OrganizationAttachmentSchema = SchemaFactory.createForClass(
  OrganizationAttachment,
);
