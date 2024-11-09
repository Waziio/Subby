<script setup lang="ts">
import { RouterView, useRoute } from 'vue-router';
import NavBar from './components/NavBar.vue';
import { computed } from 'vue';

const route = useRoute();
const isAuthRoute = computed(() => route.name === 'SignIn' || route.name === 'SignUp');
</script>

<template>
	<NavBar v-if="!isAuthRoute" />
	<RouterView />
</template>

<style scoped></style>
