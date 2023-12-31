import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";
import App from "./App.vue";
import { BootstrapVue3 } from "bootstrap-vue-3";
import "v-calendar/dist/style.css";
import VCalendar from "v-calendar";
import Markdown from "vue3-markdown-it";

const app = createApp(App);
app.use(VCalendar, {});
app.use(Markdown);
app.use(router);
app.use(createPinia());
app.use(BootstrapVue3);
app.mount("#app");
