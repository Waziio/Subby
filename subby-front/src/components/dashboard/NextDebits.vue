<script setup lang="ts">
import Debit from '@/components/dashboard/Debit.vue';
import LogoImgWithoutText from '@/assets/logo_without_text.png';
import type { Subscription } from '@/types/Subscription';
import ShowMoreButton from '@/components/dashboard/ShowMoreButton.vue';

defineProps<{ nextDebits: Subscription[] }>();
</script>

<template>
	<div id="nextDebitsContainer" class="bg-third rounded-lg px-4 pt-2 pb-4 flex flex-col">
		<div id="nextDebitsTopContainer" class="flex justify-between items-center">
			<h2 id="nextDebitsTitle">Next debits</h2>
			<ShowMoreButton link="/debits" />
		</div>
		<div id="debits" v-for="debit in nextDebits">
			<Debit :name="debit.name" :date="debit.renewalAt" :cost="debit.cost" :image="LogoImgWithoutText" />
		</div>

		<p v-if="nextDebits.length === 0" class="flex-grow flex justify-center items-center text-5xl">Nothing to display...</p>
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
