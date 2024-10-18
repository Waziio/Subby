import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString, Length } from 'class-validator';

export class SignupRequest {
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;
  
  @IsNotEmpty()
  readonly username: string;
  
  @IsNotEmpty()
  @Length(8, 20)
  @IsString()
  readonly password: string;

  @IsPhoneNumber("FR")
  readonly phoneNumber: string;
}