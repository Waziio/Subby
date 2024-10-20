import { Controller, Get, Query } from '@nestjs/common';
import { GetCategoriesDto } from './dto/getCategoriesDto';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

    @Get("/")
    async get(@Query() getCategoriesDto: GetCategoriesDto) {
      return await this.categoriesService.getCategories(getCategoriesDto)
    }
}
