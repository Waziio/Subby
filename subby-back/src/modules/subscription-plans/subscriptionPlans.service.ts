import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { SubscriptionPlan } from './subscriptionPlan.model';
import { CreateSubPlanDto } from './dto/CreateSubPlanDto';
import { PlatformsService } from '../platforms/platforms.service';

@Injectable()
export class SubscriptionPlansService {

    constructor(
        @InjectModel(SubscriptionPlan) private readonly subPlansModel: typeof SubscriptionPlan,
        private readonly platformsService: PlatformsService,
    ) {}

    async getById(id: number) {
        const planFound = await this.subPlansModel.findByPk(id);
        if (!planFound) throw new NotFoundException('Subscription plan not found');
        return planFound;
    }

    async create(createSubPlanDto: CreateSubPlanDto) {      
        await this.platformsService.getById(createSubPlanDto.platformId);
        return await this.subPlansModel.create({
            name: createSubPlanDto.name,
            cost: createSubPlanDto.cost,
            frequency: createSubPlanDto.frequency,
            platformId: createSubPlanDto.platformId,
        });
    }
}
