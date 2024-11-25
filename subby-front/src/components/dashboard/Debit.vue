<script setup lang="ts">
import Image from 'primevue/image';
import { format } from 'date-fns';
import { computed } from 'vue';

const props = defineProps({
    name: String,
    image: String,
    date: String,
    cost: String
});

const formattedDate = computed(() => {
    if (props.date) return new Date(props.date);
    else return new Date()
})

const defaultImg = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/768px-Spotify_logo_without_text.svg.png"

</script>

<template>
    <div id="debitContainer">
        <div id="leftContent" class="flex gap-4 items-center">
            <Image id="logo" width="30" height="30" :src="defaultImg" alt="Debit" />
            <div id="debitContent" class="flex flex-col py-1">
                <h3 class="debitTitle font-bold text-sm">{{ name }}</h3>
                <p class="debitDate text-sm">{{ format(formattedDate, 'dd/MM/yyyy') }}</p>
            </div>
        </div>

        <div id="leftContent" class="flex gap-4 items-center">
            <p class="debitcost font-bold">{{ cost }}€</p>
        </div>
    </div>
</template>

<style scoped>
#debitContainer {
    padding-left: 2%;
    padding-right: 2%;
    @apply flex items-center justify-between bg-primary text-third rounded-lg shadow-md;
}
</style>