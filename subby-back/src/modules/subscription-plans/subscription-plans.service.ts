import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { SubscriptionPlan } from './subscriptionPlan.model';

@Injectable()
export class SubscriptionPlansService {

    constructor(@InjectModel(SubscriptionPlan) private readonly subPlansModel: typeof SubscriptionPlan) {}

    async getSubscriptionPlanById(id: number) {
        const planFound = await this.subPlansModel.findByPk(id);
        if (!planFound) throw new NotFoundException('Subscription plan not found');
        return planFound;
    }
}
