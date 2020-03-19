import _ from "lodash";
import axios from "axios";

export default {
  namespaced: true,
  state: {
    faqs: [],
    faqsOverview: [],
    faqSearch: [],
    popularFaqTags: ["general", "turmoil"],
    newlyCreatedFaqId: 0
  },
  getters: {
    getFaq: state => id => {
      return state.faqs[id - 1]; // hack
    },
    getFaqOverviewList: state => {
      return state.faqsOverview;
    },
    getNewlyCreatedFaqId(state) {
      return state.newlyCreatedFaqId;
    }
  },
  mutations: {
    commitFaqOverviewList(state, faqs) {
      state.faqsOverview = faqs;
    },
    commitSearchFaq(state, faqs) {
      state.faqSearch = faqs;
    },
    commitAddFaq(state, faq) {
      state.faqs.push(faq);
      state.newlyCreatedFaqId = state.faqs.length;
    },
    commitEditFaq(state, faq) {
      let i = _.find(state.faqs, f => (f.id = faq.id));
      state.faqs[i] = faq;
    }
  },
  actions: {
    searchFaq({ commit, state }, { term }) {
      let faqs = _.filter(state.faqs, f => {
        return (
          f.title.includes(term) ||
          f.body.includes(term) ||
          f.tags.includes(term)
        );
      });
      commit("commitSearchFaq", faqs);
    },
    saveFaq({ commit, state }, { id, faq }) {
      if (id == 0) {
        let nextId = state.faqs.length + 1;
        faq.id = nextId;
        commit("commitAddFaq", faq);
      } else {
        commit("commitEditFaq", faq);
      }
    },
    fetchFaqOverviewList({ commit, state }) {
      console.log("fetch");
      console.log(state.faqOverviewList);
      if (state.faqs.length) {
        return;
      }

      axios({
        url: "http://localhost:8890/faqs",
        headers: { "Content-Type": "application/json" }
      }).then(response => {
        commit("commitFaqOverviewList", response.data);
      });
    }
  }
};
