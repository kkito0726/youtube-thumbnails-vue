import { createApp } from "vue";
import router from "./router";
import App from "./App.vue";
import VueTimeago from "vue-timeago";

createApp(App)
  .use(router, VueTimeago, {
    name: "Timeago",
    locale: "ja", //デフォルトのlocal
    //利用するlocal
    locales: {
      ja: require("date-fns/locale/ja"),
      "zh-CN": require("date-fns/locale/zh_cn"),
    },
  })
  .mount("#app");
