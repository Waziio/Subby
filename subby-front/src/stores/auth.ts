import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import AuthService from '@/services/AuthService';
import type { User } from '@/types/User';

export const useAuthStore = defineStore(
	'auth',
	() => {
		const token = ref<string>();
		const user = ref<User>();
		const isAuthenticated = computed(() => !!token.value);

		async function signIn(email: string, password: string) {
			const response = await AuthService.signIn(email, password);
			token.value = response.jwt;
		}

		return { user, token, isAuthenticated, signIn };
	},
	{ persist: true }
);
