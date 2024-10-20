import { Body, Controller, Delete, Get, Put, Req } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateMeDto } from './dto/updateMeDto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Get('/me')
  async getMe(@Req() req: Request) {
    const payload = req['user'];
    const user = await this.userService.getById(payload.userId);
    if (user) {
      return {
        id: user.id,
        username: user.username,
        email: user.email,
        phoneNumber: user.phoneNumber,
        googleId: user.googleId,
      };
    }
  }

  @Put('/me')
  async updateMe(@Req() req: Request, @Body() updateMeDto: UpdateMeDto) {
    const userId = req['user']['userId'] as number;
    return await this.userService.update(userId, updateMeDto);
  }

  @Delete('/me')
  async deleteMe(@Req() req: Request) {
    const userId = req['user']['userId'] as number;
    return await this.userService.delete(userId);
  }
}
