import { Module } from '@nestjs/common';
import { UserSubscriptionsController } from './userSubscriptions.controller';
import { UserSubscriptionsService } from './userSubscriptions.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserSubscription } from './userSubscription.model';
import { UsersModule } from '../users/users.module';
import { SubscriptionPlansModule } from '../subscription-plans/subscriptionPlans.module';

@Module({
  controllers: [UserSubscriptionsController],
  providers: [UserSubscriptionsService],
  imports: [SequelizeModule.forFeature([UserSubscription]), UsersModule, SubscriptionPlansModule],
})
export class UserSubscriptionsModule {}