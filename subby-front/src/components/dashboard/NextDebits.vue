<script setup lang="ts">
import Debit from '@/components/dashboard/Debit.vue';
import LogoImgWithoutText from '@/assets/logo_without_text.png';
import {onMounted, ref} from 'vue';
import SubscriptionService from '@/services/SubscriptionService';
import type {Subscription} from '@/types/Subscription';
import ShowMoreButton from "@/components/dashboard/ShowMoreButton.vue";

const debits = ref<Subscription[]>([]);

onMounted(async () => {
    debits.value = await SubscriptionService.get({limit: 3, sort: 'DESC'})
});

</script>

<template>
    <div id="nextDebitsContainer" class="bg-third rounded-lg px-4 pt-2 pb-4">
        <div id="nextDebitsTopContainer" class="flex justify-between items-center">
            <h2 id="nextDebitsTitle">Next debits</h2>
            <ShowMoreButton link="/debits"/>
        </div>
        <div id="debits" v-for="debit in debits">
            <Debit :name="debit.name" :date="debit.renewalAt" :cost="debit.cost" :image="LogoImgWithoutText"/>
        </div>
    </div>
</template>

<style scoped>
#nextDebitsTitle {
    @apply text-primary font-bold text-xl;
}

#debits {
    @apply flex flex-col mt-4 gap-3;
}
</style>