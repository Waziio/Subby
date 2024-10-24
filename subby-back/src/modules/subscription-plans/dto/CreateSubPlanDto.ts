import {
  IsDecimal,
  IsEnum,
  IsNotEmpty,
  IsString,
  IsInt,
} from 'class-validator';
import { SubscriptionFrequency } from 'src/types/SubscriptionFrequency';

export class CreateSubPlanDto {
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @IsDecimal()
  readonly cost: number;

  @IsEnum(SubscriptionFrequency)
  readonly frequency: SubscriptionFrequency;

  @IsInt()
  readonly platformId: number;
}
