import { createRouter, createWebHistory } from 'vue-router';
import SignInView from '../views/SignInView.vue';
import DashboardView from '@/views/DashboardView.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/signin',
			name: 'SignIn',
			component: SignInView,
		},
		{
			path: '/dashboard',
			name: 'Dashboard',
			component: DashboardView,
		},
	],
});

export default router;
