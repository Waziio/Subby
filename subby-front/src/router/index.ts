import { createRouter, createWebHistory } from 'vue-router';
import SignInView from '../views/SignInView.vue';
import DashboardView from '@/views/DashboardView.vue';
import { useAuthStore } from '@/stores/auth';
import { useUserStore } from '@/stores/user';
import SignUpView from '@/views/SignUpView.vue';

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			redirect: () => {
				return { name: 'SignIn' };
			},
		},
		{
			path: '/signin',
			name: 'SignIn',
			component: SignInView,
		},
		{
			path: '/signup',
			name: 'SignUp',
			component: SignUpView,
		},
		{
			path: '/dashboard',
			name: 'Dashboard',
			component: DashboardView,
		},
	],
});

router.beforeEach(async (to, from, next) => {
	const authStore = useAuthStore();
	const userStore = useUserStore();

	const isOnAuthPage = to.name === 'SignIn' || to.name === 'SignUp';

	if (authStore.isAuthenticated) userStore.getMe();

	if (!isOnAuthPage && !authStore.isAuthenticated) {
		console.log('Not authenticated');
		next({ name: 'SignIn' });
	} else {
		if (isOnAuthPage && authStore.isAuthenticated) {
			next({ name: 'Dashboard' });
		} else {
			next();
		}
	}
});

export default router;
