import { Module } from '@nestjs/common';
import { SubscriptionPlansController } from './subscription-plans.controller';
import { SubscriptionPlansService } from './subscription-plans.service';
import { SubscriptionPlan } from './subscriptionPlan.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  controllers: [SubscriptionPlansController],
  providers: [SubscriptionPlansService],
  imports: [SequelizeModule.forFeature([SubscriptionPlan])],
})
export class SubscriptionPlansModule {}
