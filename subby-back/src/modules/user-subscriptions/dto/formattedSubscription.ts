export class FormattedSubscription {
    id: number;
    isCustom: boolean;
    name: string;
    cost: number;
    frequency: string;
    renewalAt: string;
    userId: number;
    logo?: string;
    subscriptionPlanId?: number;
}