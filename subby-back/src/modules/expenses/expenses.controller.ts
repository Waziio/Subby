import {Controller, Get, Query, Req} from '@nestjs/common';
import {ExpensesService} from "./expenses.service";
import {GetAllExpensesDto} from "./dto/GetAllExpensesDto";

@Controller('expenses')
export class ExpensesController {
    constructor(
        private readonly expensesService: ExpensesService,
    ) {}

    @Get('/')
    async getAll(@Req() req: Request, @Query() query: GetAllExpensesDto) {
        const userId = req['user']['userId'] as number;
        return await this.expensesService.getAll(userId, query);
    }
}
