import { INTEGER } from 'sequelize';
import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { UserSubscription } from '../user-subscriptions/userSubscription.model';
import { Notification } from '../notifications/notification.model';

@Table
export class User extends Model {
  @Column({ autoIncrement: true, primaryKey: true, type: INTEGER })
  id: number;

  @Column({ allowNull: false, unique: true, validate: { notEmpty: true, len: { args: [3, 25], msg: "Username must be between 3 and 25 characters long" } } })
  username: string;

  @Column({ allowNull: false, validate: { isEmail: true, notEmpty: true }, unique: true })
  email: string;

  @Column({ allowNull: false })
  password: string;

  @Column({ allowNull: true, field: "phone_number" })
  phoneNumber: string;

  @Column({ allowNull: true, unique: true, field: "google_id" })
  googleId: string;

  @HasMany(() => UserSubscription, { onDelete: "CASCADE" })
  subscriptions: UserSubscription[];

  @HasMany(() => Notification, { onDelete: "CASCADE" })
  notifications: Notification[];
}
