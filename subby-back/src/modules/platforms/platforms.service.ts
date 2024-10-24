import { Injectable, NotFoundException } from '@nestjs/common';
import { Platform } from './platform.model';
import { InjectModel } from '@nestjs/sequelize';
import { GetPlatformsDto } from './dto/getPlatformsDto';
import { Op } from 'sequelize';
import { CreatePlatformDto } from './dto/createPlatformDto';
import { CategoriesService } from '../categories/categories.service';

@Injectable()
export class PlatformsService {
  constructor(
    @InjectModel(Platform) private readonly platformModel: typeof Platform,
    private categoriesService: CategoriesService,
  ) {}

  async getPlatforms(getPlatformsDto: GetPlatformsDto) {
    const whereCondition = getPlatformsDto.name
      ? { where: { name: { [Op.like]: `${getPlatformsDto.name}%` } } }
      : undefined;

    return await this.platformModel.findAll(whereCondition);
  }

  async getPlatformById(id: number) {
    const platformFound = await this.platformModel.findByPk(id);
    if (!platformFound) throw new NotFoundException('Platform not found');
    return platformFound;
  }

  async create(createPlatformDto: CreatePlatformDto) {
    // Check if category exists
    await this.categoriesService.getCategoryById(createPlatformDto.categoryId);

    // Create the new platform
    return await this.platformModel.create({
      name: createPlatformDto.name,
      logo_url: createPlatformDto.logoUrl,
      categoryId: createPlatformDto.categoryId,
    });
  }

  async getPlatformPlans(platformId: number) {
    const platform = await this.getPlatformById(platformId);
    return await platform.$get("plans");
  }
}
