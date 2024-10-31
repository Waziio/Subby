import { apiClient } from './apiClient';

class AuthService {
	async signIn(email: string, password: string) {
		const response = await apiClient.post('/signin', { email, password });
		return response.data;
	}
}

export default new AuthService();
