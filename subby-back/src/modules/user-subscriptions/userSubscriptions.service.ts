import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { UserSubscription } from './userSubscription.model';
import { UsersService } from '../users/users.service';
import { CreateUserSubDto } from './dto/createUserSubDto';
import { SubscriptionPlansService } from '../subscription-plans/subscriptionPlans.service';
import { GetUserSubsQueryDto } from './dto/getUserSubsQueryDto';
import { AssociationGetOptions } from 'sequelize-typescript';
import { FormattedSubscription } from './dto/formattedSubscription';
import { PlatformsService } from '../platforms/platforms.service';

@Injectable()
export class UserSubscriptionsService {
  constructor(
    @InjectModel(UserSubscription)
    private readonly userSubsModel: typeof UserSubscription,
    private readonly usersService: UsersService,
    private readonly subPlansService: SubscriptionPlansService,
    private readonly platformsService: PlatformsService,
  ) {}

  async getAll(userId: number, getUserSubsQuery: GetUserSubsQueryDto): Promise<FormattedSubscription[]> {
    const userFound = await this.usersService.getById(userId);
    
    const orderSort = getUserSubsQuery.sort ?? 'ASC';
    const options: AssociationGetOptions = { order: [['renewalAt', orderSort]] };
    
    if (getUserSubsQuery.limit) options.limit = getUserSubsQuery.limit;

    const subscriptions = await userFound.$get('subscriptions', options);
    return this.formatSubscriptions(subscriptions);

  }

  async getById(userId: number, subscriptionId: number) {
    const subFound = await this.userSubsModel.findOne({ where: { id: subscriptionId, userId: userId } });
    if (!subFound) throw new NotFoundException(`Subscription not found`);
    return subFound;
  }

  async create(userId: number, createUserSubDto: CreateUserSubDto) {
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

  async delete(userId: number, subscriptionId: number) {
    const subFound = await this.getById(userId, subscriptionId);
    await subFound.destroy();
  }

  private async formatSubscriptions(subscriptions: UserSubscription[]): Promise<FormattedSubscription[]> {
    const formattedSubs: FormattedSubscription[] = [];

    for (let sub of subscriptions) {
        const formattedSub = new FormattedSubscription();

        if (sub.isCustom) {
          formattedSub.isCustom = true;

          formattedSub.id = sub.id;
          formattedSub.name = sub.customName;
          formattedSub.cost = sub.customCost;
          formattedSub.frequency = sub.customFrequency;
          formattedSub.renewalAt = sub.renewalAt;
          formattedSub.userId = sub.userId;
        } else {
          formattedSub.isCustom = false;

          const subPlan = await this.subPlansService.getById(sub.subscriptionPlanId);
          const platform = await this.platformsService.getById(subPlan.platformId);
          
          formattedSub.id = sub.id;
          formattedSub.name = subPlan.name;
          formattedSub.cost = subPlan.cost;
          formattedSub.frequency = subPlan.frequency;
          formattedSub.renewalAt = sub.renewalAt;
          formattedSub.userId = sub.userId;
          formattedSub.logo = platform.logoUrl;
          formattedSub.subscriptionPlanId = sub.subscriptionPlanId;
        }

        formattedSubs.push(formattedSub);
    }

    return formattedSubs;
  }
}
