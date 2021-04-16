import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

createApp(App).use(router).use(Antd).mount("#app");
