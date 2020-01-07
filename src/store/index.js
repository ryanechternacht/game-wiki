import Vue from "vue";
import Vuex from "vuex";

import cardList from "./cards.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cards: cardList.cards
  },
  mutations: {},
  actions: {},
  modules: {}
});
