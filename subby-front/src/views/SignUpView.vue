<script setup lang="ts">
import AuthLink from '@/components/auth/AuthLink.vue';
import CustomInput from '@/components/custom/CustomInput.vue';
import Logo from '@/components/Logo.vue';
import authService from '@/services/AuthService';
import { AxiosError } from 'axios';
import Button from 'primevue/button';
import InputMask from 'primevue/inputmask';
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const toast = useToast();

const email = ref('');
const username = ref('');
const password = ref('');
const phoneNumber = ref('');

async function signUp() {
	try {
		await authService.signUp(email.value, username.value, password.value, phoneNumber.value);
		router.push({ name: 'SignIn' });
	} catch (error) {
		if (error instanceof AxiosError) {
			if (error.response?.status === 400) {
				const errorMessages = error.response.data.message;

				if (Array.isArray(errorMessages)) {
					errorMessages.forEach((message) => {
						toast.add({ severity: 'error', summary: 'Signup failed', detail: message, life: 5000 });
					});
				} else {
					toast.add({ severity: 'error', summary: 'Signup failed', detail: errorMessages, life: 5000 });
				}
			} else {
				toast.add({ severity: 'error', summary: 'Connection failed', detail: 'An error occurred', life: 3000 });
			}
		}
	}
}
</script>

<template>
	<Toast />
	<div id="signUpPage">
		<Logo id="logo" />
		<div id="signUpFormContainer">
			<h1 class="text-2xl text-primary font-bold">Sign up</h1>
			<div id="inputs">
				<CustomInput id="email" class="input" v-model="email" label="Email" type="email" />
				<CustomInput id="username" v-model="username" class="input" label="Username" />
				<CustomInput id="password" v-model="password" class="input" label="Password" type="password" />
				<InputMask id="phoneNumber" class="input max-w-full" v-model="phoneNumber" placeholder="+33600000000" mask="+33999999999" />
			</div>
			<Button label="Connect" @click="signUp"></Button>
		</div>
		<AuthLink currentPage="signUp"></AuthLink>
	</div>
</template>

<style scoped>
#logo {
	position: absolute;
	top: 20px;
}

#signUpPage {
	height: 100vh;
	@apply flex justify-center items-center flex-col gap-6;
}

#signUpFormContainer {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	height: 35vh;
	@apply bg-third lg:w-1/4 md:w-2/4 sm:w-1/2 rounded-xl p-4 shadow-lg;
}

#inputs {
	@apply lg:w-5/6 gap-5 grid grid-cols-2;
}
</style>
