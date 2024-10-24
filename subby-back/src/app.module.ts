import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './modules/users/users.module';
import { User } from './modules/users/user.model';
import { CategoriesModule } from './modules/categories/categories.module';
import { Category } from './modules/categories/category.model';
import { PlatformsModule } from './modules/platforms/platforms.module';
import { Platform } from './modules/platforms/platform.model';
import { SubscriptionPlansModule } from './modules/subscription-plans/subscriptionPlans.module';
import { SubscriptionPlan } from './modules/subscription-plans/subscriptionPlan.model';
import { UserSubscriptionsModule } from './modules/user-subscriptions/userSubscriptions.module';
import { UserSubscription } from './modules/user-subscriptions/userSubscription.model';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { Notification } from './modules/notifications/notification.model';
import { AuthModule } from './modules/auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './modules/auth/auth.guard';


@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      models: [User, Category, Platform, SubscriptionPlan, UserSubscription, Notification],
      autoLoadModels: true,
      synchronize: true
    }),
    UsersModule,
    CategoriesModule,
    PlatformsModule,
    SubscriptionPlansModule,
    UserSubscriptionsModule,
    NotificationsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService, { provide: APP_GUARD, useClass: AuthGuard }],
}) 
export class AppModule {}
