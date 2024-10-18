import { Injectable, BadRequestException } from '@nestjs/common';
import { SignupRequest } from './dto/signupRequest';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import * as crypto from "crypto"


@Injectable()
export class AuthService {

  constructor(private usersService: UsersService) {}
  
  async signup(signupRequest: SignupRequest) {
    const { email, username, password } = signupRequest

    if ((await this.usersService.findByEmail(email)).length > 0) {
      throw new BadRequestException("Email unavailable")
    }

    if ((await this.usersService.findByUsername(username)).length > 0) {
      throw new BadRequestException("Email unavailable")
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const userCreationData = { email, username, password: hashedPassword }
    if (signupRequest.phoneNumber) userCreationData['phoneNumber'] = signupRequest.phoneNumber

    const createdUser = await this.usersService.create(userCreationData)
    delete createdUser.password
    
    return createdUser
  }
}