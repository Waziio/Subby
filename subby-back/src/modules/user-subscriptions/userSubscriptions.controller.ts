import { Body, Controller, Get, Post, Req } from '@nestjs/common';
import { UserSubscriptionsService } from './userSubscriptions.service';
import { CreateUserSubDto } from './dto/createUserSubDto';

@Controller('subscriptions')
export class UserSubscriptionsController {
  constructor(
    private readonly userSubsService: UserSubscriptionsService,
  ) {}

  @Get("")
  async getUserSubscriptions(@Req() req: Request) {
    const userId = req['user']['userId'] as number;
    return await this.userSubsService.getUserSubscriptions(userId);
  }

  @Post("")
  async createUserSubscription(@Req() req: Request, @Body() createUserSubDto: CreateUserSubDto) {
    const userId = req['user']['userId'] as number;
    return await this.userSubsService.createUserSubscription(userId, createUserSubDto);
  }
}
