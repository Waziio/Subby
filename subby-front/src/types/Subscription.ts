export interface Subscription {
	id: number;
	name: string;
	cost: string;
	frequency: SubscriptionFrequency;
    renewalAt: string;
    isCustom: boolean;
    userId: number;
    subscriptionPlanId: number;
}

export enum SubscriptionFrequency {
    MONTHLY = 'monthly',
    YEARLY = 'yearly',
    WEEKLY = 'weekly'
}