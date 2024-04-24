import { Type } from 'class-transformer';
import {
  IsArray,
  IsEnum,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { SortBy } from '../../domain/enums/sort-by.enum';

export class FindAllQueryRequest {
  @IsArray()
  @IsString({ each: true })
  @IsOptional()
  search_fields: string[];

  @IsString()
  @IsOptional()
  search_text: string;

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
