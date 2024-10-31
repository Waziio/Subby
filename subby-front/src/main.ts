import './assets/main.css';
import './assets/base.css';
import './assets/tailwind.css';
import 'typeface-inter';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(PrimeVue, { theme: 'none' });
app.use(createPinia());
app.use(router);

app.mount('#app');
