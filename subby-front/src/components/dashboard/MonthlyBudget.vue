<script setup lang="ts">
import {format, startOfMonth, endOfMonth} from 'date-fns';
import ShowMoreButton from "@/components/dashboard/ShowMoreButton.vue";
import {onMounted, ref} from "vue";
import SubscriptionService from "@/services/SubscriptionService";

const now = new Date()
const currentMonth = format(now, 'MMMM yyyy')
const start = format(startOfMonth(now), 'yyyy-MM-dd');
const end = format(endOfMonth(now), 'yyyy-MM-dd');

const totalCost = ref<number>()

onMounted(async () => {
    try {
        const subs = await SubscriptionService.get({ start, end })
        const sum = subs.reduce((sum, sub) => sum + parseFloat(sub.cost), 0)
        totalCost.value = Number(sum.toFixed(2))
    } catch(err) {
        console.log(err)
    }
})

</script>

<template>
    <div id="monthlyBudgetContainer" class="bg-third rounded-lg px-4 pt-2 pb-4">
        <div id="monthlyBudgetTopContainer" class="flex justify-between items-center">
            <h2 id="monthlyBudgetTitle">Budget<span class="font-normal"> - {{ currentMonth }}</span></h2>
            <ShowMoreButton link="/budget"></ShowMoreButton>
        </div>
        <p class="h-full flex justify-center items-center text-7xl">{{ totalCost }}€</p>
    </div>
</template>

<style scoped>
#monthlyBudgetTitle {
    @apply text-primary font-bold text-xl;
}
</style>