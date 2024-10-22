import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { Category } from './category.model';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService],
  imports: [SequelizeModule.forFeature([Category])],
  exports: [CategoriesService],
})
export class CategoriesModule {}
