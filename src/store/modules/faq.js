import api from "@/modules/api-request";

// the API returns results as an object with the
// core result contained in a "data" property and
// other meta-data attached as needed (e.g. generated-at)
// {
//   data: {...}, // the actual result of the call
//   "generated-at": timestamp,
//   other: ...
// }
//
// we store the whole thing here (because that meta-data is valuable),
// so calls to get individual items need to box/unbox appropriately

export default {
  namespaced: true,
  state: {
    faqs: {},
    faqsOverview: null,
    faqSearchResults: null,
    popularFaqTags: ["general", "turmoil"],
    newlyCreatedFaqId: 0
  },
  getters: {
    getFaq: state => id => {
      let faq = state.faqs[id];
      return faq ? faq.data : {};
    },
    getFaqOverviewList: state => {
      let overview = state.faqsOverview;
      return overview ? overview.data : [];
    },
    getNewlyCreatedFaqId(state) {
      return state.newlyCreatedFaqId;
    },
    getSearchedFaqs(state) {
      let search = state.faqSearchResults;
      return search ? search.data : [];
    }
  },
  mutations: {
    commitFaqOverviewList(state, overview) {
      state.faqsOverview = overview;
    },
    commitFaq(state, faq) {
      let newState = { ...state.faqs };
      newState[faq.data.id] = faq;
      state.faqs = newState;
    },
    commitNewFaq(state, faq) {
      let newState = { ...state.faqs };
      newState[faq.data.id] = faq;
      state.faqs = newState;
      state.newlyCreatedFaqId = faq.data.id;
    },
    commitSearchFaq(state, faqs) {
      state.faqSearchResults = faqs;
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
