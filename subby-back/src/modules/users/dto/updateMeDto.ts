import {
  IsEmail,
  IsOptional,
  IsPhoneNumber,
  IsString,
  Length,
} from 'class-validator';

export class UpdateMeDto {
  @IsOptional()
  @IsEmail()
  readonly email: string;

  @IsOptional()
  @IsString()
  @Length(3, 25)
  readonly username: string;

  @IsOptional()
  @IsString()
  @Length(8, 20)
  readonly password: string;

  @IsOptional()
  @IsPhoneNumber('FR')
  readonly phoneNumber: string;
}
