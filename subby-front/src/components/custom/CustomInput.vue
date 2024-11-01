<script setup lang="ts">
import FloatLabel from 'primevue/floatlabel';
import InputText from 'primevue/inputtext';
import type { InputTextProps } from 'primevue/inputtext';

interface CustomInputProps extends /* @vue-ignore */ InputTextProps {
	label?: string;
}

const props = defineProps<CustomInputProps>();

defineOptions({
	inheritAttrs: false,
});
</script>

<template>
	<div class="customInput">
		<FloatLabel variant="on" v-if="label">
			<InputText :id="props.id" v-bind="$attrs" />
			<label :for="props.id">{{ props.label }}</label>
		</FloatLabel>

		<InputText v-else :id="props.id" v-bind="$attrs" />
	</div>
</template>

<style scoped>
.customInput,
.p-inputtext {
	@apply max-w-full;
}
</style>
