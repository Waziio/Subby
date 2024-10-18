import { Body, Controller, Get, Put, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateMeDto } from './dto/updateMeDto';

@Controller('users')
export class UsersController {

    constructor( private readonly userService: UsersService ) {}

    @Get("/me")
    async getMe(@Req() req: Request) {
        const payload = req["user"]
        const user = await this.userService.getById(payload.userId)
        if (user) {
            return {
                id: user.id,
                username: user.username,
                email: user.email,
                phoneNumber: user.phoneNumber,
                googleId: user.googleId
            }
        }
    }

    @Put("/me")
    async updateMe(@Req() req: Request, @Body() updateMeDto: UpdateMeDto) {
        try {
            const userId = req["user"]["userId"] as number
            await this.userService.update(userId, updateMeDto)
            return { success: true }
        } catch(err) {
            return { success: false }
        }
    }
}
