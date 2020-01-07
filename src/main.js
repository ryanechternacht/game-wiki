import Vue from "vue";
import Lodash from "vue-lodash";

import App from "./App.vue";
import store from "./store";
import router from "./router";

Vue.config.productionTip = false;

Vue.use(Lodash);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
