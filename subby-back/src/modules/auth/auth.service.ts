import { Injectable, BadRequestException } from '@nestjs/common';
import { SignupRequest } from './dto/signupRequest';
import { UsersService } from '../users/users.service';
import { SigninRequest } from './dto/signinRequest';
import * as bcrypt from 'bcrypt';
import * as jwt from "jsonwebtoken"


@Injectable()
export class AuthService {

  constructor(private usersService: UsersService) {}
  
  async signup(signupRequest: SignupRequest) {
    const { email, username, password } = signupRequest

    if (await this.usersService.findByEmail(email)) {
      throw new BadRequestException("Email unavailable")
    }

    if (await this.usersService.findByUsername(username)) {
      throw new BadRequestException("Email unavailable")
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const userCreationData = { email, username, password: hashedPassword }
    if (signupRequest.phoneNumber) userCreationData['phoneNumber'] = signupRequest.phoneNumber

    const createdUser = await this.usersService.create(userCreationData)
    delete createdUser.password

    return createdUser
  }

  async signin(signinRequest: SigninRequest) {
    const { email, password } = signinRequest
    const userFound = await this.usersService.findByEmail(email)
    
    if (!userFound) throw new BadRequestException("Email or password invalid")

    if (!await bcrypt.compare(password, userFound.password)) {
      throw new BadRequestException("Email or password invalid")
    }

    const userData = { 
      id: userFound.id,
      email: userFound.email,
      username: userFound.username,
      phoneNumber: userFound.phoneNumber
    }

    return { jwt: this.generateJwt(userFound.id), user: userData }
  }

  private generateJwt(userId: number) {
    return jwt.sign({ userId }, process.env.JWT_SECRET, { algorithm: "HS256" , expiresIn: "7d"})
  }
}