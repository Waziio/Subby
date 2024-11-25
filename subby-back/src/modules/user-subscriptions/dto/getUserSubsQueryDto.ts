import { Type } from 'class-transformer';
import { IsInt, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class GetUserSubsQueryDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  readonly sort: "ASC" | "DESC";

  @IsOptional()
  @Type(() => Number)
  @IsNumber()
  readonly limit: number;
}
