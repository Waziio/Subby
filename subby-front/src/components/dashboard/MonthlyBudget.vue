<script setup lang="ts">
import { format } from 'date-fns';
import ShowMoreButton from '@/components/dashboard/ShowMoreButton.vue';
import { computed, ref } from 'vue';
import type { Subscription } from '@/types/Subscription';

const props = defineProps<{ subs: Subscription[] }>();

const now = new Date();
const currentMonth = format(now, 'MMMM yyyy');

const totalCost = computed(() => {
	const sum = props.subs.reduce((sum, sub) => sum + parseFloat(sub.cost), 0);
	return sum.toFixed(2);
});
</script>

<template>
	<div id="monthlyBudgetContainer" class="bg-third rounded-lg px-4 pt-2 pb-4 flex flex-col">
		<div id="monthlyBudgetTopContainer" class="flex justify-between items-center">
			<h2 id="monthlyBudgetTitle">
				Budget<span class="font-normal"> - {{ currentMonth }}</span>
			</h2>
			<ShowMoreButton link="/budget"></ShowMoreButton>
		</div>
		<p class="flex-grow flex justify-center items-center text-7xl">{{ totalCost }}€</p>
	</div>
</template>

<style scoped>
#monthlyBudgetTitle {
	@apply text-primary font-bold text-xl;
}
</style>
