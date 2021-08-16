import { createApp } from "vue";
import "vant/lib/index.css";
import App from "./App.vue";
import router from "./router";
import { Toast, Button, Loading } from "vant";
import { store, key } from "./store/index";

const app = createApp(App);

// 添加全局方法
app.config.globalProperties.$toast = (msg: string) => {
  return Toast(msg);
};

app.use(router);
app.use(Button);
app.use(Loading);
app.use(store, key);
app.mount("#app");
