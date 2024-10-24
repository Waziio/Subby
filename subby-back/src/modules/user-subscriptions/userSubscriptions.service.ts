import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserSubscription } from './userSubscription.model';
import { UsersService } from '../users/users.service';

@Injectable()
export class UserSubscriptionsService {
  constructor(
    @InjectModel(UserSubscription)
    private readonly userSubsModel: typeof UserSubscription,
    private readonly usersService: UsersService,
  ) {}

  async getUserSubscriptions(userId: number) {
    const userFound = await this.usersService.getById(userId);
    return await userFound.$get('subscriptions');
  }
}
