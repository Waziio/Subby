import { IsNotEmpty, IsString } from 'class-validator';

export class SigninRequest {
  @IsNotEmpty()
  readonly email: string;
  
  @IsNotEmpty()
  @IsString()
  readonly password: string;
}