<script setup lang="ts">
import { format } from 'date-fns';

const currentMonth = format(new Date(), 'MMMM yyyy')

</script>

<template>
    <div id="monthlyBudgetContainer" class="bg-third rounded-lg px-4 pt-2 pb-4">
        <h2 id="monthlyBudgetTitle">Budget<span class="font-normal"> - {{ currentMonth }}</span></h2>
        <p class="h-full flex justify-center items-center text-7xl">- 311.84</p>
    </div>
</template>

<style scoped>
#monthlyBudgetTitle {
    @apply text-primary font-bold text-xl;
}
</style>