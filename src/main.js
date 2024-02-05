import "@/assets/css/main.css";
import "@/assets/bootstrap/css/bootstrap.min.css";
import "@/assets/bootstrap/js/bootstrap.bundle.min.js";
import "@/assets/bootstrap-icons/bootstrap-icons.css";
import "@/assets/css/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

app.mount("#app");
