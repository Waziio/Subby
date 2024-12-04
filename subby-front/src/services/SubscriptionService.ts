import type { Subscription } from '@/types/Subscription';
import { apiClient } from './apiClient';

class SubscriptionService {
	async get(params: { sort?: 'ASC' | 'DESC', limit?: number, start?: string, end?: string }): Promise<Subscription[]> {
		const response = await apiClient.get(`/subscriptions`, { params });
		return response.data;
	}
}

export default new SubscriptionService();
