import { Type } from 'class-transformer';
import {IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString} from 'class-validator';

export class GetUserSubsQueryDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  readonly sort: "ASC" | "DESC";

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  readonly limit: number;

  @IsOptional()
  @IsDateString()
  @IsNotEmpty()
  readonly start: string;

  @IsOptional()
  @IsDateString()
  @IsNotEmpty()
  readonly end: string;
}
