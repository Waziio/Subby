import { Controller, Get, Req } from '@nestjs/common';
import { UserSubscriptionsService } from './userSubscriptions.service';

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
}
