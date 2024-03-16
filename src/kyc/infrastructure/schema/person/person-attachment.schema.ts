import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { IdentifiableEntitySchema } from 'src/config/database/mongoose/identifiable-entity.schema';
import { PersonalDocumentType } from 'src/kyc/domain/enums/kyc-attachment-type.enum';

@Schema()
export class PersonAttachment extends IdentifiableEntitySchema {
  @Prop({
    require: true,
    enum: Object.values(PersonalDocumentType),
  })
  DocumentTitle: PersonalDocumentType;

  @Prop({ required: true, type: String })
  FileUrl: string;
}

export const PersonAttachmentSchema =
  SchemaFactory.createForClass(PersonAttachment);
