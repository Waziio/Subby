import { Module } from '@nestjs/common';
import { ExpensesController } from './expenses.controller';
import { ExpensesService } from './expenses.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {Expense} from "./expense.model";

@Module({
  controllers: [ExpensesController],
  providers: [ExpensesService],
  imports: [SequelizeModule.forFeature([Expense])],
})
export class ExpensesModule {}
