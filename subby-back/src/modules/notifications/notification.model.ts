import { INTEGER } from 'sequelize';
import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';
import { ENUM } from 'sequelize';
import { DATE } from 'sequelize';
import { User } from '../users/user.model';
import { UserSubscription } from '../user-subscriptions/userSubscription.model';
import { TEXT } from 'sequelize';
import { NotificationStatus } from 'src/types/NotificationStatus';

@Table
export class Notification extends Model {
  @Column({ autoIncrement: true, primaryKey: true, type: INTEGER })
  id: number;

  @Column({ allowNull: false, validate: { notEmpty: true } })
  name: string;

  @Column({ allowNull: false, type: TEXT })
  message: string;

  @Column({ allowNull: false, type: ENUM(...Object.values(NotificationStatus)) })
  status: NotificationStatus;

  @Column({ allowNull: false, type: DATE })
  scheduledAt: string;

  @ForeignKey(() => User)
  @Column({ allowNull: false, type: INTEGER })
  userId: number;

  @ForeignKey(() => UserSubscription)
  @Column({ allowNull: false, type: INTEGER })
  userSubscriptionId: number;
}
