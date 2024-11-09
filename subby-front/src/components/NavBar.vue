<script setup lang="ts">
import MegaMenu from 'primevue/megamenu';
import Logo from './Logo.vue';
import Button from 'primevue/button';
import { ref } from 'vue';

const items = ref([
	{
		label: 'Dashboard',
		root: true,
		icon: 'pi pi-gauge',
	},
	{
		label: 'Subscriptions',
		root: true,
		icon: 'pi pi-wallet',
	},
	{
		label: 'Platforms',
		root: true,
		icon: 'pi pi-desktop',
	},
	{
		label: 'My Account',
		root: true,
		icon: 'pi pi-user',
	},
]);
</script>

<template>
	<MegaMenu id="navbar" :model="items">
		<template #start>
			<Logo id="logo" width="60" :withoutText="true" />
			<p class="ml-2 text-3xl text-primary font-bold">Subby</p>
		</template>

		<template #end>
			<Button icon="pi pi-bell" aria-label="Notifications" />
			<Button icon="pi pi-sign-out" severity="danger" variant="text" aria-label="Logout" />
		</template>
	</MegaMenu>
</template>

<style scoped>
#navbar {
	@apply text-primary mx-auto;
}

#iconMenu {
	@apply w-full text-center text-xl;
}

.p-megamenu {
	@apply justify-between rounded-none;
}

:deep(.p-megamenu-end) {
	@apply ml-0 flex gap-2;
}

:deep(.p-megamenu-root-list) {
	@apply gap-6;
}

:deep(.p-megamenu-item *) {
	@apply text-primary text-xl font-medium !important;
}
</style>
