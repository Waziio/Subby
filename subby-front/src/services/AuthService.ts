import type { SignInResponse, SignUpRequest } from '@/types/Auth';
import { apiClient } from './apiClient';
import type { User } from '@/types/User';

class AuthService {
	async signIn(email: string, password: string): Promise<SignInResponse> {
		const response = await apiClient.post('/signin', { email, password });
		return response.data;
	}

	async signUp(email: string, username: string, password: string, phoneNumber: string): Promise<User> {
		const data: SignUpRequest = { email, username, password };
		if (phoneNumber && phoneNumber !== '') data['phoneNumber'] = phoneNumber;
		const response = await apiClient.post('/signup', data);
		return response.data;
	}
}

export default new AuthService();
