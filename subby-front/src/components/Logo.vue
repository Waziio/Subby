<script setup lang="ts">
import Image from 'primevue/image';
import LogoImg from '@/assets/logo.png';
import LogoImgWithoutText from '@/assets/logo_without_text.png';

const props = defineProps({
	width: String,
	withoutText: Boolean,
});
</script>

<template>
	<Image id="logo" :width="props.width ?? 150" :src="props.withoutText ? LogoImgWithoutText : LogoImg" alt="Subby" />
</template>
