import Vue from "vue";
import Lodash from "vue-lodash";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

import App from "./App.vue";
import store from "./store";
import router from "./router";

Vue.config.productionTip = false;

Vue.use(Lodash);
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
