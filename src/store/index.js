import Vue from "vue";
import Vuex from "vuex";

import _ from "lodash";

import cardList from "./cards.js";
import faqList from "./faqs.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cards: cardList.cards,
    faqs: faqList.faqs,
    faqSearch: []
  },
  getters: {},
  mutations: {
    commitSearchFaq(state, faqs) {
      state.faqSearch = faqs;
    }
  },
  actions: {
    searchFaq({ state }, { term }) {
      let faqs = _.filter(state.faqs, f => {
        return f.title.includes(term) || f.body.includes(term);
      });
      this.commit("commitSearchFaq", faqs);
    }
  },
  modules: {}
});
