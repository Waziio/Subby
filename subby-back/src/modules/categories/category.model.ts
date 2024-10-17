import { INTEGER } from 'sequelize';
import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { Platform } from 'src/modules/platforms/platform.model';

@Table
export class Category extends Model {
  @Column({ autoIncrement: true, primaryKey: true, type: INTEGER })
  id: number;

  @Column({ allowNull: false, validate: { notEmpty: true } })
  name: string;

  @HasMany(() => Platform)
  platforms: Platform[];
}
