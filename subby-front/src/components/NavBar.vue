<script setup lang="ts">
import MegaMenu from 'primevue/megamenu';
import Logo from './Logo.vue';
import Button from 'primevue/button';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const items = ref([
	{
		label: 'Dashboard',
		root: true,
		icon: 'pi pi-gauge',
		command: () => router.push({ name: 'Dashboard' }),
	},
	{
		label: 'Subscriptions',
		root: true,
		icon: 'pi pi-wallet',
		command: () => router.push({ name: 'Subscriptions' }),
	},
	{
		label: 'Platforms',
		root: true,
		icon: 'pi pi-desktop',
		command: () => router.push({ name: 'Platforms' }),
	},
	{
		label: 'My Account',
		root: true,
		icon: 'pi pi-user',
		command: () => router.push({ name: 'Account' }),
	},
]);
</script>

<template>
	<MegaMenu id="navbar" :model="items">
		<template #start>
			<Logo id="logo" width="60" :withoutText="true" />
			<p id="subbyTitle">Subby</p>
		</template>

		<template #end>
			<Button icon="pi pi-bell" aria-label="Notifications" />
		</template>
	</MegaMenu>
</template>

<style scoped>
#subbyTitle {
	@apply ml-2 lg:text-3xl md:text-2xl sm:text-xl text-xl text-primary font-bold;
}

:deep(#logo) {
	@apply lg:w-14 md:w-12 sm:w-10 w-8;
}
.p-megamenu {
	@apply justify-between gap-5 w-7/12 mt-5 mx-auto rounded-lg;
}

:deep(.p-megamenu-end) {
	@apply ml-0 mr-2;
}

:deep(.p-megamenu-start) {
	@apply cursor-pointer;
}

:deep(.p-megamenu-root-list) {
	@apply gap-6;
}

:deep(.p-megamenu-item *) {
	@apply text-primary text-xl font-medium !important;
}
</style>
