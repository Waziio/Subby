<script setup lang="ts">
import FullCalendar from '@fullcalendar/vue3';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import type { CalendarOptions } from '@fullcalendar/core/index.js';

const calendarOptions: CalendarOptions = {
	plugins: [dayGridPlugin, interactionPlugin],
	initialView: 'dayGridMonth',
	height: '50vh',
};
</script>

<template>
	<div class="w-1/2 h-full mx-auto">
		<FullCalendar class="" :options="calendarOptions" />
	</div>
</template>
