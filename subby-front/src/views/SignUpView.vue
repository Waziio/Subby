<script setup lang="ts">
import AuthLink from '@/components/auth/AuthLink.vue';
import CustomInput from '@/components/custom/CustomInput.vue';
import Logo from '@/components/Logo.vue';
import Button from 'primevue/button';
import InputMask from 'primevue/inputmask';
import Toast from 'primevue/toast';
import { ref } from 'vue';

const email = ref('');
const username = ref('');
const password = ref('');
const phoneNumber = ref('');

async function signUp() {}
</script>

<template>
	<Toast />
	<div id="signUpPage">
		<Logo id="logo" />
		<div id="signUpFormContainer">
			<h1 class="text-2xl text-primary font-bold">Sign up</h1>
			<div id="inputs">
				<CustomInput id="email" v-model="email" label="Email" type="email" />
				<CustomInput id="username" v-model="username" label="Username" />
				<CustomInput id="username" v-model="password" label="Username" />
				<InputMask id="phoneNumber" class="max-w-full" v-model="phoneNumber" placeholder="+33600000000" mask="+33999999999" />
			</div>
			<Button label="Connect" @click="signUp"></Button>
		</div>
		<AuthLink currentPage="signIn"></AuthLink>
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
	@apply bg-third lg:w-2/6 sm:w-1/2 rounded-xl p-4 shadow-lg;
}

#inputs {
	@apply justify-items-center w-full gap-3 grid grid-cols-2;
}
</style>
