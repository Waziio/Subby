import { Body, Controller, Delete, Get, Param, Post, Req } from '@nestjs/common';
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
    return await this.userSubsService.getAll(userId);
  }

  @Get("/:id")
  async getUserSubscriptionById(@Req() req: Request, @Param('id') subscriptionId: number) {
    const userId = req['user']['userId'] as number;
    return await this.userSubsService.getById(userId, subscriptionId);
  }

  @Post("")
  async createUserSubscription(@Req() req: Request, @Body() createUserSubDto: CreateUserSubDto) {
    const userId = req['user']['userId'] as number;
    return await this.userSubsService.create(userId, createUserSubDto);
  }

  @Delete("/:id")
  async deleteUserSubscription(@Req() req: Request, @Param('id') subscriptionId: number) {
    const userId = req['user']['userId'] as number;
    return await this.userSubsService.delete(userId, subscriptionId);
  }
}
