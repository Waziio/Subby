import {
  IsBoolean,
  IsDateString,
  IsDecimal,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { SubscriptionFrequency } from 'src/types/SubscriptionFrequency';

export class CreateUserSubDto {
  @IsBoolean()
  readonly isCustom: boolean;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  readonly customName: string;

  @IsOptional()
  @IsDecimal()
  readonly customCost: number;

  @IsOptional()
  @IsEnum(SubscriptionFrequency)
  readonly customFrequency: SubscriptionFrequency;

  @IsDateString()
  readonly renewalAt: string;

  @IsOptional()
  @IsInt()
  readonly subscriptionPlanId: number;
}
