import { Module } from '@nestjs/common';
import { SubscriptionPlansController } from './subscriptionPlans.controller';
import { SubscriptionPlansService } from './subscriptionPlans.service';
import { SubscriptionPlan } from './subscriptionPlan.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { PlatformsModule } from '../platforms/platforms.module';

@Module({
  controllers: [SubscriptionPlansController],
  providers: [SubscriptionPlansService],
  imports: [SequelizeModule.forFeature([SubscriptionPlan]), PlatformsModule],
  exports: [SubscriptionPlansService],
})
export class SubscriptionPlansModule {}
