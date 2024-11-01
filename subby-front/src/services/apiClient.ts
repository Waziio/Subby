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
