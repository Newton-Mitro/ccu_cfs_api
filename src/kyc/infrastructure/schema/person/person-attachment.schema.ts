import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IdentifiableEntitySchema } from 'src/common/mongoose/identifiable-entity.schema';
import { PersonalDocumentType } from 'src/kyc/domain/enums/kyc-attachment-type.enum';

@Schema()
export class PersonAttachment extends IdentifiableEntitySchema {
  @Prop({
    require: true,
    enum: Object.values(PersonalDocumentType),
  })
  DocumentTitle: PersonalDocumentType;

  @Prop({ required: true, type: String })
  Base64Document: string;

  @Prop({ required: true, type: String })
  FileExtension: string;
}

export const PersonAttachmentSchema =
  SchemaFactory.createForClass(PersonAttachment);
