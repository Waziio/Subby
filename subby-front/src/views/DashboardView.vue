<script setup lang="ts">
import MonthlyBudget from '@/components/dashboard/MonthlyBudget.vue';
import NextDebits from '@/components/dashboard/NextDebits.vue';
</script>

<template>
    <div id="dashboardContent">
        <MonthlyBudget id="nextDebits"/>
        <NextDebits id="nextDebits"/>
        <NextDebits id="nextDebits"/>
        <NextDebits id="nextDebits"/>
    </div>
</template>

<style>

#dashboardContent {
    margin-left: auto;
    margin-right: auto;
    @apply w-5/6 max-h-[calc(100vh-25vh)] grid grid-cols-2 grid-rows-2 gap-8 mt-14;
}
</style>