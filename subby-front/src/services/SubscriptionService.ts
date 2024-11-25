import type { Subscription } from '@/types/Subscription';
import { apiClient } from './apiClient';
import type { User } from '@/types/User';

class SubscriptionService {
	async get(params: { sort?: 'ASC' | 'DESC', limit?: number }): Promise<Subscription[]> {
		const response = await apiClient.get(`/subscriptions`, { params });
		return response.data;
	}
}

export default new SubscriptionService();
