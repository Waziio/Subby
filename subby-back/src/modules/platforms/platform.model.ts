import { INTEGER } from 'sequelize';
import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Category } from 'src/modules/categories/category.model';

@Table
export class Platform extends Model {
  @Column({ autoIncrement: true, primaryKey: true, type: INTEGER })
  id: number;

  @Column({ allowNull: false, validate: { notEmpty: true } })
  name: string;

  @Column({ allowNull: true, validate: { isUrl: true }, field: "logo_url" })
  logoUrl: string;
  
  @ForeignKey(() => Category)
  @Column({ allowNull: false, type: INTEGER })
  categoryId: number;
}
