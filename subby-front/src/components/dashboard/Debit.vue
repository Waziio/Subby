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

</script>

<template>
    <div id="debitContainer">
        <div id="leftContent" class="flex gap-4 items-center">
            <Image id="logo" width="50" height="50" :src="image" alt="Debit" />
            <div id="debitContent" class="flex flex-col">
                <h3 class="debitTitle font-bold">{{ name }}</h3>
                <p class="debitDate text-sm">{{ format(formattedDate, 'dd/MM/yyyy') }}</p>
            </div>
        </div>

        <div id="leftContent" class="flex gap-4 items-center">
            <p class="debitcost font-bold text-xl">{{ cost }}€</p>
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