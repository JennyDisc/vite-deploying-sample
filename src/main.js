import { createApp } from "vue"; // 來自套件
import { createPinia } from "pinia"; // 來自套件

import axios from "axios";
import VueAxios from "vue-axios";

import App from "./App.vue"; // 來自src資料夾內
import router from "./router"; // 來自src資料夾內

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueAxios, axios);

app.mount("#app");
