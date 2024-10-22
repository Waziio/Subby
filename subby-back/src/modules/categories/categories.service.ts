import { Injectable, NotFoundException, OnApplicationBootstrap } from '@nestjs/common';
import { Category } from './category.model';
import { InjectModel } from '@nestjs/sequelize';
import { GetCategoriesDto } from './dto/getCategoriesDto';
import { Op } from 'sequelize';
import { categoriesToAdd } from 'src/utils';

@Injectable()
export class CategoriesService implements OnApplicationBootstrap {
  constructor(
    @InjectModel(Category) private readonly categoryModel: typeof Category,
  ) {}

  async getCategories(getCategoriesDto: GetCategoriesDto) {
    const whereCondition = getCategoriesDto.name
      ? { where: { name: { [Op.like]: `${getCategoriesDto.name}%` } } }
      : undefined;

    return await this.categoryModel.findAll(whereCondition);
  }

  async getCategoryById(id: number) {
    const categoryFound = await this.categoryModel.findByPk(id)
    if (!categoryFound) throw new NotFoundException("Category not found")
    return categoryFound
  }

  async onApplicationBootstrap() {
    try {
      const existingCategories = await this.categoryModel.findAll({
        where: { name: categoriesToAdd },
      });

      const existingCategoryNames = existingCategories.map(
        (category) => category.name,
      );
      const newCategories = categoriesToAdd.filter(
        (name) => !existingCategoryNames.includes(name),
      );

      if (newCategories.length > 0) {
        await this.categoryModel.bulkCreate(
          newCategories.map((name) => ({ name }))
        ); 
      }
    } catch (err) {
      console.error('Error when initializing default categories', err);
    }
  }
}
