import { BaseEntity } from 'src/common/entities/base-entity';
import { PersonalDocumentType } from 'src/kyc/domain/enums/kyc-attachment-type.enum';

export class PersonAttachmentEntity extends BaseEntity {
  private _DocumentTitle: PersonalDocumentType;
  private _FileUrl: string;

  constructor(
    attachmentId: string,
    documentTitle: PersonalDocumentType,
    fileUrl: string,
  ) {
    super(attachmentId);
    this._DocumentTitle = documentTitle;
    this._FileUrl = fileUrl;
  }

  public get DocumentTitle(): PersonalDocumentType {
    return this._DocumentTitle;
  }

  public set DocumentTitle(value: PersonalDocumentType) {
    this._DocumentTitle = value;
  }

  public get FileUrl(): string {
    return this._FileUrl;
  }

  public set FileUrl(value: string) {
    this._FileUrl = value;
  }
}
