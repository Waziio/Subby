<script setup lang="ts">
import Logo from '@/components/Logo.vue';
import AuthService from '@/services/AuthService';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import { ref } from 'vue';

const email = ref('');
const password = ref('');

async function signIn() {
	try {
		const response = await AuthService.signIn(email.value, password.value);
		console.log(response);
	} catch (error) {
		console.error(error);
	}
}
</script>

<template>
	<div id="signInPage">
		<Logo id="logo" />
		<div id="signInFormContainer">
			<h1 class="text-2xl text-primary font-bold">Sign in</h1>
			<div id="inputs">
				<InputText id="email" v-model="email" placeholder="Email" />
				<InputText v-model="password" placeholder="Password" />
			</div>
			<Button label="Connect" @click="signIn"></Button>
		</div>
		<p class="text-lg">Don't have an account yet ? <RouterLink id="signUpLink" to="/signup" class="font-bold">Sign up</RouterLink></p>
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
	@apply bg-third lg:w-1/6 sm:w-1/2 rounded-lg p-4 shadow-lg;
}

#inputs {
	display: flex;
	flex-direction: column;
	@apply w-3/4 justify-center gap-2;
}

#signUpLink {
	position: relative;
}

#signUpLink::after {
	content: '';
	position: absolute;
	width: 0;
	height: 2px;
	bottom: -5px;
	left: 0;
	@apply bg-current transition-all duration-300;
}

#signUpLink:hover::after {
	width: 100%;
}
</style>
