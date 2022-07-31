import { createApp } from "vue";
import App from "./App.vue";
// reset style sheet
import "@/styles/reset.scss";
// CSS common style sheet
import "@/styles/common.scss";
// vue Router
import router from "@/routers/index";

const app = createApp(App);

app.use(router).mount("#app");
