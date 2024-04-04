import { Type } from 'class-transformer';
import { IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';
import { SortBy } from 'src/common/enums/sort-by.enum';

export class FindAllQueryRequest {
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  page: number = 1;

  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  limit: number = 100;

  @IsString()
  @IsOptional()
  order_by: string;

  @IsOptional()
  @IsEnum(SortBy)
  sort_by: SortBy = SortBy.ASC;
}
