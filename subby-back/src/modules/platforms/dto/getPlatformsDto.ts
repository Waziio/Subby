import { IsOptional, IsString } from 'class-validator';

export class GetPlatformsDto {
  @IsOptional()
  @IsString()
  readonly name: string;
}
