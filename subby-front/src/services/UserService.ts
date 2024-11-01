import { apiClient } from './apiClient';
import type { User } from '@/types/User';

class UserService {
	async getMe(): Promise<User> {
		const response = await apiClient.get('/users/me');
		return response.data;
	}
}

export default new UserService();
