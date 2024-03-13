import { IsNotEmpty, IsString } from 'class-validator';

export class CreateStorageDocumentRequest {
  @IsString()
  @IsNotEmpty()
  DocumentTitle: string;

  @IsString()
  @IsNotEmpty()
  FileExtension: string;

  @IsString()
  @IsNotEmpty()
  Base64Document: string;
}
