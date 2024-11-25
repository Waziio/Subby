<script setup lang="ts">
import Debit from '@/components/dashboard/Debit.vue';
import LogoImgWithoutText from '@/assets/logo_without_text.png';

</script>

<template>
    <div id="nextDebitsContainer" class="bg-third rounded-lg px-4 py-4">
        <h2 id="nextDebitsTitle">Next debits</h2>
        <div id="debits">
            <Debit name="Spotify" date="18/07/2024" price="5.99" :image="LogoImgWithoutText" />
            <Debit name="Spotify" date="18/07/2024" price="5.99" :image="LogoImgWithoutText" />
            <Debit name="Spotify" date="18/07/2024" price="5.99" :image="LogoImgWithoutText" />
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