<script setup lang="ts">
import AuthLink from '@/components/auth/AuthLink.vue';
import CustomInput from '@/components/custom/CustomInput.vue';
import Logo from '@/components/Logo.vue';
import { useAuthStore } from '@/stores/auth';
import { AxiosError } from 'axios';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const toast = useToast();
const authStore = useAuthStore();
const router = useRouter();

const email = ref('');
const password = ref('');

async function signIn() {
	try {
		await authStore.signIn(email.value, password.value);
		router.push({ name: 'Dashboard' });
	} catch (error) {
		if (error instanceof AxiosError) {
			if (error.response?.status === 400) {
				toast.add({ severity: 'error', summary: 'Connection failed', detail: 'Email or password invalid', life: 3000 });
			} else {
				toast.add({ severity: 'error', summary: 'Connection failed', detail: 'An error occurred', life: 3000 });
			}
		}
	}
}
</script>

<template>
	<Toast />
	<div id="signInPage">
		<Logo id="logo" />
		<div id="signInFormContainer">
			<h1 class="text-2xl text-primary font-bold">Sign in</h1>
			<div id="inputs">
				<CustomInput id="email" v-model="email" label="Email" type="email" />
				<CustomInput id="password" v-model="password" label="Password" type="password" />
			</div>
			<Button label="Connect" @click="signIn"></Button>
		</div>
		<AuthLink currentPage="signIn"></AuthLink>
	</div>
</template>

<style scoped>
#logo {
	position: absolute;
	top: 20px;
}

#signInPage {
	height: 100vh;
	@apply flex justify-center items-center flex-col gap-6;
}

#signInFormContainer {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	height: 30vh;
	@apply bg-third lg:w-1/6 sm:w-1/2 rounded-xl p-4 shadow-lg;
}

#inputs {
	display: flex;
	flex-direction: column;
	align-items: center;
	@apply w-3/4 justify-center gap-3;
}
</style>
