import { Module } from '@nestjs/common';
import { PlatformsController } from './platforms.controller';
import { PlatformsService } from './platforms.service';
import { Platform } from './platform.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { CategoriesModule } from '../categories/categories.module';

@Module({
  controllers: [PlatformsController],
  providers: [PlatformsService],
  imports: [SequelizeModule.forFeature([Platform]), CategoriesModule],
})
export class PlatformsModule {}
