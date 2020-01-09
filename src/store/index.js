import Vue from "vue";
import Vuex from "vuex";

import cardList from "./cards.js";
import faqList from "./faq.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cards: cardList.cards,
    faq: faqList.faq
  },
  mutations: {},
  actions: {},
  modules: {}
});
