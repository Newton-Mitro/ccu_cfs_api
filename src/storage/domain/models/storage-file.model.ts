import { AggregateRoot } from '@nestjs/cqrs';

export class StorageFileModel extends AggregateRoot {
  id: string;
  DocumentTitle: string;
  FileURL: string;
}
