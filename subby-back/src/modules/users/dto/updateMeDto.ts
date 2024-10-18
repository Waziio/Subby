import { IsEmail, IsPhoneNumber, IsString, Length } from 'class-validator';

export class UpdateMeDto {
  @IsEmail()
  readonly email: string;
  
  @Length(3, 25)
  readonly username: string;
  
  @Length(8, 20)
  @IsString()
  readonly password: string;

  @IsPhoneNumber("FR")
  readonly phoneNumber: string;
}