import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import AuthService from '@/services/AuthService';
import type { User } from '@/types/User';
import { useUserStore } from '@/stores/user';

export const useAuthStore = defineStore(
	'auth',
	() => {
		const token = ref<string>();
		const isAuthenticated = computed(() => !!token.value);

		async function signIn(email: string, password: string) {
			const response = await AuthService.signIn(email, password);
			token.value = response.jwt;
		}

		function logout() {
			token.value = undefined;
			const userStore = useUserStore();
			userStore.logout();
		}

		return { token, isAuthenticated, signIn, logout };
	},
	{ persist: true }
);
