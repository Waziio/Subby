import { Body, Controller, Post } from '@nestjs/common';
import { SignupRequest } from './dto/signupRequest';
import { AuthService } from './auth.service';
import { SigninRequest } from './dto/signinRequest';

@Controller()
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post("/signup")
    signup(@Body() signupRequest: SignupRequest) {
        return this.authService.signup(signupRequest)
    }

    @Post("/signin")
    signin(@Body() signinRequest: SigninRequest) {
        return this.authService.signin(signinRequest)
    }
}
