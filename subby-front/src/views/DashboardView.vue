<script setup lang="ts">
import NextDebits from '@/components/dashboard/NextDebits.vue';
</script>

<template>
    <div id="dashboardContent">
        <NextDebits id="nextDebits"/>
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