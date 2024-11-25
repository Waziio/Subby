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
    @apply w-5/6 mt-14 grid grid-cols-2 gap-8;
}
</style>