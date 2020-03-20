import api from "@/modules/api-request";

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
    searchFaq({ commit }, { term }) {
      api.get(`faqs/search/${term}`).then(response => {
        commit("commitSearchFaq", response.data);
      });
    },
    saveFaq({ commit }, { faq }) {
      if (faq.id) {
        api.put(`faq/${faq.id}`, faq).then(response => {
          commit("commitFaq", response.data);
        });
      } else {
        api.post("faqs", faq).then(response => {
          commit("commitNewFaq", response.data);
        });
      }
    },
    fetchFaqOverviewList({ commit, state }) {
      if (state.faqs.length) {
        return;
      }

      api.get("faqs").then(response => {
        commit("commitFaqOverviewList", response.data);
      });
    },
    fetchFaq({ commit }, { id }) {
      // enable updating here
      // if (force || true) {
      api.get(`faq/${id}`).then(response => {
        commit("commitFaq", response.data);
      });
      // }
    }
  }
};
