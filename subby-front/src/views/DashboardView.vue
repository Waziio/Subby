<script setup lang="ts">
import MonthlyBudget from '@/components/dashboard/MonthlyBudget.vue';
import NextDebits from '@/components/dashboard/NextDebits.vue';
import SubscriptionService from '@/services/SubscriptionService';
import type { Subscription } from '@/types/Subscription';
import { endOfMonth, format, startOfMonth } from 'date-fns';
import { computed, onMounted, ref } from 'vue';

const subscriptions = ref<Subscription[]>([]);

const fetchSubs = async () => {
	subscriptions.value = await SubscriptionService.get({ sort: 'DESC' });
};

onMounted(fetchSubs);

const now = new Date();

const startCurrentMonth = format(startOfMonth(now), 'yyyy-MM-dd');
const endCurrentMonth = format(endOfMonth(now), 'yyyy-MM-dd');

const currentMonthSubs = computed(() => {
	return subscriptions.value.filter((sub) => {
		return sub.renewalAt >= startCurrentMonth && sub.renewalAt <= endCurrentMonth;
	});
});

const nextDebits = computed(() => {
	return subscriptions.value.slice(0, 3);
});
</script>

<template>
	<div id="dashboardContent">
		<MonthlyBudget id="monthlyBudget" class="card" :subs="currentMonthSubs" />
		<NextDebits id="nextDebits" class="card" :nextDebits="nextDebits" />
		<NextDebits id="nextDebits" class="card" :nextDebits="nextDebits" />
		<NextDebits id="nextDebits" class="card" :nextDebits="nextDebits" />
	</div>
</template>

<style>
#dashboardContent {
	margin-left: auto;
	margin-right: auto;
	@apply w-5/6 min-h-[calc(100vh-25vh)] grid grid-cols-2 grid-rows-2 gap-8 mt-14;
}

.card {
	@apply shadow-md;
}
</style>
