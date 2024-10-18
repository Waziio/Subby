import { Body, Controller, Post } from '@nestjs/common';
import { SignupRequest } from './dto/signupRequest';
import { AuthService } from './auth.service';
import { SigninRequest } from './dto/signinRequest';
import { Public } from 'src/decorators/publicRoute';

@Controller()
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Public()
    @Post("/signup")
    signup(@Body() signupRequest: SignupRequest) {
        return this.authService.signup(signupRequest)
    }

    @Public()
    @Post("/signin")
    signin(@Body() signinRequest: SigninRequest) {
        return this.authService.signin(signinRequest)
    }
}
