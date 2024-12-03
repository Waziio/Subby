<script setup lang="ts">
defineProps({
    link: String,
});
</script>

<template>
    <RouterLink id="showMoreBtn" :to="link">Show more</RouterLink>
</template>

<style>
#showMoreBtn {
    position: relative;
    @apply flex items-center gap-4 font-semibold hover:underline underline-offset-4;
}
</style>