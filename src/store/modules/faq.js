import _ from "lodash";
import axios from "axios";

export default {
  namespaced: true,
  state: {
    faqs: {},
    faqsOverview: [],
    faqSearch: [],
    popularFaqTags: ["general", "turmoil"],
    newlyCreatedFaqId: 0
  },
  getters: {
    getFaq: state => id => {
      return state.faqs[id] || {};
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
    commitFaq(state, faq) {
      let newState = { ...state.faqs };
      newState[faq.id] = faq;
      state.faqs = newState;
    },
    commitNewFaq(state, faq) {
      let newState = { ...state.faqs };
      newState[faq.id] = faq;
      state.faqs = newState;
      state.newlyCreatedFaqId = faq.id;
    },
    commitSearchFaq(state, faqs) {
      state.faqSearch = faqs;
    }
  },
  actions: {
    searchFaq({ commit, state }, { term }) {
      // let faqs = _.filter(state.faqs, f => {
      //   return (
      //     f.title.includes(term) ||
      //     f.body.includes(term) ||
      //     f.tags.includes(term)
      //   );
      // });
      axios({
        url: `http://localhost:8890/faqs/search/${term}`,
        headers: { Accept: "application/json" },
        method: "get"
      }).then(response => {
        commit("commitSearchFaq", response.data);
      });
    },
    saveFaq({ commit }, { faq }) {
      if (faq.id) {
        axios({
          url: `http://localhost:8890/faq/${faq.id}`,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          method: "put",
          data: faq
        }).then(response => {
          commit("commitFaq", response.data);
        });
      } else {
        axios({
          url: "http://localhost:8890/faqs",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          method: "post",
          data: faq
        }).then(response => {
          commit("commitNewFaq", response.data);
        });
      }
    },
    fetchFaqOverviewList({ commit, state }) {
      if (state.faqs.length) {
        return;
      }

      axios({
        url: "http://localhost:8890/faqs",
        headers: { Accept: "application/json" }
      }).then(response => {
        commit("commitFaqOverviewList", response.data);
      });
    },
    fetchFaq({ commit }, { id, force }) {
      // enable updating here
      if (force || true) {
        axios({
          url: `http://localhost:8890/faq/${id}`,
          headers: { Accept: "application/json" }
        }).then(response => {
          commit("commitFaq", response.data);
        });
      }
    }
  }
};
