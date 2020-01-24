import Vue from "vue";
import Vuex from "vuex";

import cards from "./modules/cards";
import faq from "./modules/faq";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    cards,
    faq
  }
});
