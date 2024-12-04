import {Injectable} from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Expense} from "./expense.model";
import {GetAllExpensesDto} from "./dto/GetAllExpensesDto";
import {Op} from "sequelize";

@Injectable()
export class ExpensesService {
    constructor(
        @InjectModel(Expense)
        private readonly expenseModel: typeof Expense,
    ) {
    }

    async getAll(userId: number, query?: GetAllExpensesDto) {
        let whereCondition = { userId }

        if (query.start) whereCondition['createdAt'] = { [Op.gte]: query.start }
        if (query.end) whereCondition['createdAt'] = { [Op.lte]: query.end }

        return this.expenseModel.findAll({ where: whereCondition })
    }
}
