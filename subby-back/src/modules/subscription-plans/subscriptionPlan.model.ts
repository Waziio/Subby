import { DECIMAL, INTEGER, ENUM } from 'sequelize';
import { Column, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { Platform } from 'src/modules/platforms/platform.model';
import { SubscriptionFrequency } from 'src/types/SubscriptionFrequency';
import { UserSubscription } from '../user-subscriptions/userSubscription.model';

@Table
export class SubscriptionPlan extends Model {
  @Column({ autoIncrement: true, primaryKey: true, type: INTEGER })
  id: number;

  @Column({ allowNull: false, validate: { notEmpty: true } })
  name: string;

  @Column({ allowNull: false, validate: { isDecimal: true }, type: DECIMAL(10, 2) })
  cost: number;

  @Column({ allowNull: false, type: ENUM(...Object.values(SubscriptionFrequency)) })
  frequency: SubscriptionFrequency;
  
  @ForeignKey(() => Platform)
  @Column({ allowNull: false, type: INTEGER })
  platformId: number;

  @HasMany(() => UserSubscription)
  userSubscriptions: UserSubscription[];
}
