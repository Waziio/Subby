import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserSubscription } from './userSubscription.model';
import { UsersService } from '../users/users.service';
import { CreateUserSubDto } from './dto/createUserSubDto';
import { SubscriptionPlansService } from '../subscription-plans/subscriptionPlans.service';

@Injectable()
export class UserSubscriptionsService {
  constructor(
    @InjectModel(UserSubscription)
    private readonly userSubsModel: typeof UserSubscription,
    private readonly usersService: UsersService,
    private readonly subPlansService: SubscriptionPlansService,
  ) {}

  async getUserSubscriptions(userId: number) {
    const userFound = await this.usersService.getById(userId);
    return await userFound.$get('subscriptions');
  }

  async createUserSubscription(userId: number, createUserSubDto: CreateUserSubDto) {
    await this.usersService.getById(userId);

    if (createUserSubDto.isCustom) {
        // Create custom subscription
        if (!this.areCustomFieldsSet(createUserSubDto)) {
            throw new BadRequestException(`Custom subscription fields are required : [customName, customCost, customFrequency]`);
        }

        return await this.userSubsModel.create({
            isCustom: createUserSubDto.isCustom,
            customName: createUserSubDto.customName,
            customCost: createUserSubDto.customCost,
            customFrequency: createUserSubDto.customFrequency,
            renewalAt: createUserSubDto.renewalAt,
            userId: userId
        });
    } else {
        // Create non-custom subscription (based on a subscription plan) 
        if (!createUserSubDto.subscriptionPlanId) throw new BadRequestException(`Non-custom subscription requires subscriptionPlanId`);
        await this.subPlansService.getById(createUserSubDto.subscriptionPlanId);

        return await this.userSubsModel.create({
            isCustom: createUserSubDto.isCustom,
            renewalAt: createUserSubDto.renewalAt,
            userId: userId,
            subscriptionPlanId: createUserSubDto.subscriptionPlanId
        })
    }
  }

  private areCustomFieldsSet(createUserSubDto: CreateUserSubDto) {
    const requiredCustomFields = ['customName', 'customCost', 'customFrequency'];
    return requiredCustomFields.every(field => !!createUserSubDto[field]);
  }
}
