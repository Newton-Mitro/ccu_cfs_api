import { BaseEntity } from 'src/common/entities/base-entity';
import { OrganizationalDocumentType } from 'src/kyc/domain/enums/kyc-attachment-type.enum';

export class OrganizationAttachmentEntity extends BaseEntity {
  private _DocumentTitle: OrganizationalDocumentType;
  private _FileUrl: string;

  constructor(
    attachmentId: string,
    documentTitle: OrganizationalDocumentType,
    fileUrl: string,
  ) {
    super(attachmentId);
    this._DocumentTitle = documentTitle;
    this._FileUrl = fileUrl;
  }

  public get DocumentTitle(): OrganizationalDocumentType {
    return this._DocumentTitle;
  }

  public set DocumentTitle(value: OrganizationalDocumentType) {
    this._DocumentTitle = value;
  }

  public get FileUrl(): string {
    return this._FileUrl;
  }

  public set FileUrl(value: string) {
    this._FileUrl = value;
  }
}
