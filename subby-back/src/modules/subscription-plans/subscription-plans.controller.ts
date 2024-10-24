import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SubscriptionPlansService } from './subscription-plans.service';
import { CreateSubPlanDto } from './dto/CreateSubPlanDto';

@Controller('subscription-plans')
export class SubscriptionPlansController {
  constructor(
    private readonly subPlansServiceService: SubscriptionPlansService,
  ) {}

  @Get('/:id')
  async getById(@Param('id') id: string) {
    return await this.subPlansServiceService.getSubscriptionPlanById(
      parseInt(id),
    );
  }

  @Post('')
  async create(@Body() createSubPlanDto: CreateSubPlanDto) {
    return this.subPlansServiceService.create(createSubPlanDto);
  }
}
