import { INTEGER, DECIMAL, BOOLEAN } from 'sequelize';
import { BelongsTo, Column, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { SubscriptionPlan } from '../subscription-plans/subscriptionPlan.model';
import { ENUM } from 'sequelize';
import { SubscriptionFrequency } from 'src/types/SubscriptionFrequency';
import { DATE } from 'sequelize';
import { User } from '../users/user.model';
import { Notification } from '../notifications/notification.model';

@Table
export class UserSubscription extends Model {
  @Column({ autoIncrement: true, primaryKey: true, type: INTEGER })
  id: number;

  @Column({ allowNull: false, type: BOOLEAN })
  isCustom: boolean;

  @Column({ allowNull: true, validate: { notEmpty: true } })
  customName: string;

  @Column({ allowNull: true, validate: { isDecimal: true }, type: DECIMAL })
  customCost: number;

  @Column({ allowNull: true, type: ENUM(...Object.values(SubscriptionFrequency)) })
  customFrequency: SubscriptionFrequency;

  @Column({ allowNull: false, type: DATE })
  renewalAt: string;

  @ForeignKey(() => User)
  @Column({ allowNull: false, type: INTEGER })
  userId: number;

  @ForeignKey(() => SubscriptionPlan)
  @Column({ allowNull: true, type: INTEGER })
  subscriptionPlanId: number;

  @HasMany(() => Notification)
  notifications: Notification[];
}
