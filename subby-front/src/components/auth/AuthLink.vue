<template>
	<p class="text-lg">
		{{ text }} <RouterLink id="signUpLink" to="/signup" class="font-bold">{{ textLink }}</RouterLink>
	</p>
</template>

<script setup lang="ts">
const props = defineProps<{ currentPage: 'signIn' | 'signUp' }>();
const text = props.currentPage === 'signIn' ? "Don't have an account yet ?" : 'Already have an account ?';
const textLink = props.currentPage === 'signIn' ? 'Sign up' : 'Sign in';
</script>

<style scoped>
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
