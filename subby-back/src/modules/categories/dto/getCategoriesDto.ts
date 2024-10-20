import { IsOptional, IsString } from 'class-validator';

export class GetCategoriesDto {
  @IsOptional()
  @IsString()
  readonly name: string;
}
