import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { GetPlatformsDto } from './dto/getPlatformsDto';
import { PlatformsService } from './platforms.service';
import { CreatePlatformDto } from './dto/createPlatformDto';

@Controller('platforms')
export class PlatformsController {

  constructor(private readonly platformsService: PlatformsService) {}

    @Get("")
    async getAll(@Query() getPlatformsDto: GetPlatformsDto) {
        return await this.platformsService.getAll(getPlatformsDto)
    }

    @Get(":id")
    async getById(@Param('id') id: string) {
        return await this.platformsService.getById(parseInt(id))
    }

    @Post("")
    async create(@Body() createPlatformDto: CreatePlatformDto) {
        return this.platformsService.create(createPlatformDto)
    }

    @Get(":id/subscription-plans")
    async getPlatformPlans(@Param('id') id: string) {
        return await this.platformsService.getPlans(parseInt(id))
    }
}
