import { useAuthStore } from '@/stores/auth';
import axios from 'axios';

export const apiClient = axios.create({
	baseURL: 'http://localhost:3000',
	headers: {
		'Content-Type': 'application/json',
	},
});

apiClient.interceptors.request.use((request) => {
	const authStore = useAuthStore();

	if (authStore.token) {
		request.headers.Authorization = `Bearer ${authStore.token}`;
	}

	return request;
});

apiClient.interceptors.response.use(
	(response) => {
		return response;
	},
	async (error) => {
		if (error.response.status === 401) {
			// Expired JWT => refresh page, which will redirect to /signin
			const authStore = useAuthStore();
			authStore.logout();
		}
		return error;
	}
);
