<script setup lang="ts">
import Image from 'primevue/image';
import LogoImgWithoutText from '@/assets/logo_without_text.png';

const props = defineProps({
    name: String,
    image: String,
    date: String,
    price: String
});

</script>

<template>
    <div id="debitContainer">
        <div id="leftContent" class="flex gap-4 items-center">
            <Image id="logo" width="50" height="50" :src="image" alt="Debit" />
            <div id="debitContent" class="flex flex-col">
                <h3 class="debitTitle font-bold">{{ name }}</h3>
                <p class="debitDate text-sm">{{ date }}</p>
            </div>
        </div>

        <div id="leftContent" class="flex gap-4 items-center">
            <p class="debitPrice font-bold">{{ price }}€</p>
        </div>
    </div>
</template>

<style scoped>
#debitContainer {
    padding-left: 2%;
    padding-right: 2%;
    @apply flex items-center justify-between bg-secondary text-primary rounded-lg shadow-md;
}
</style>