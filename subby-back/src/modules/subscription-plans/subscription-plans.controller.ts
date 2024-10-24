import { Controller, Get, Param } from '@nestjs/common';
import { SubscriptionPlansService } from './subscription-plans.service';

@Controller('subscription-plans')
export class SubscriptionPlansController {
  constructor(private readonly subPlansServiceService: SubscriptionPlansService) {}

  @Get("/:id")
  async getById(@Param('id') id: string) {
    return await this.subPlansServiceService.getSubscriptionPlanById(parseInt(id))
  }
}
