import { IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, IsString, Length } from 'class-validator';

export class SignupRequest {
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;
  
  @IsNotEmpty()
  @Length(3, 25)
  readonly username: string;
  
  @IsNotEmpty()
  @Length(8, 20)
  @IsString()
  readonly password: string;

  @IsOptional()
  @IsPhoneNumber("FR")
  readonly phoneNumber: string;
}