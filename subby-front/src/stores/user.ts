import { ref } from 'vue';
import { defineStore } from 'pinia';
import type { User } from '@/types/User';
import UserService from '@/services/UserService';

export const useUserStore = defineStore('user', () => {
	const user = ref<User>();

	async function getMe() {
		const response = await UserService.getMe();
		user.value = response;
	}

	function logout() {
		user.value = undefined;
	}

	return { user, getMe, logout };
});
