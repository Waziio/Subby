import { IsNotEmpty, IsOptional, IsString, IsUrl } from 'class-validator';

export class CreatePlatformDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsUrl()
  @IsOptional()
  readonly logoUrl: string;

  @IsNotEmpty()
  readonly categoryId: number;
}
