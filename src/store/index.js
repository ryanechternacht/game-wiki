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
  getters: {
    getFaq: state => id => {
      return state.faqs[id - 1]; // hack
    }
  },
  mutations: {
    commitSearchFaq(state, faqs) {
      state.faqSearch = faqs;
    },
    commitAddFaq(state, faq) {
      state.faqs.push(faq);
    },
    commitEditFaq(state, faq) {
      let i = _.find(state.faqs, f => (f.id = faq.id));
      state.faqs[i] = faq;
    }
  },
  actions: {
    searchFaq({ state }, { term }) {
      let faqs = _.filter(state.faqs, f => {
        return f.title.includes(term) || f.body.includes(term);
      });
      this.commit("commitSearchFaq", faqs);
    },
    saveFaq({ state }, { id, faq }) {
      if (id == 0) {
        let nextId = state.faqs.length + 1;
        faq.id = nextId;
        this.commit("commitAddFaq", faq);
      } else {
        this.commit;
      }
    }
  },
  modules: {}
});
