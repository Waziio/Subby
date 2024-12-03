import {DECIMAL, INTEGER} from 'sequelize';
import {Column, ForeignKey, Model, Table} from 'sequelize-typescript';
import {User} from "../users/user.model";
import {UserSubscription} from "../user-subscriptions/userSubscription.model";

@Table
export class Expense extends Model {
    @Column({ autoIncrement: true, primaryKey: true, type: INTEGER })
    id: number;

    @Column({ allowNull: false, validate: { notEmpty: true } })
    name: string;

    @Column({ allowNull: false, validate: { isDecimal: true }, type: DECIMAL })
    price: number;

    @ForeignKey(() => User)
    @Column({ allowNull: false, type: INTEGER })
    userId: number;

    @ForeignKey(() => UserSubscription)
    @Column({ allowNull: true, type: INTEGER })
    userSubscriptionId: number;
}
