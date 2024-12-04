import {IsDateString, IsNotEmpty, IsOptional} from 'class-validator';

export class GetAllExpensesDto {
    @IsOptional()
    @IsDateString()
    @IsNotEmpty()
    readonly start: string;

    @IsOptional()
    @IsDateString()
    @IsNotEmpty()
    readonly end: string;
}
