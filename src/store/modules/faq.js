import moment from "moment";
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

// we use a cache on fetched data. new calls are made when:
// 1) we dont have any data
// 2) our data is older than 5 minutes
// 3) the 'force' parameter is set to true

export default {
  namespaced: true,
  state: {
    faqs: {},
    faqsOverview: null,
    faqSearchResults: null,
    mostPopularTags: null,
    newlyCreatedFaqId: 0
  },
  getters: {
    getFaq: state => id => {
      let faq = state.faqs[id];
      return faq ? faq.data : {};
    },
    faqOverviewList(state) {
      let overview = state.faqsOverview;
      return overview ? overview.data : [];
    },
    newlyCreatedFaqId(state) {
      return state.newlyCreatedFaqId;
    },
    searchedFaqs(state) {
      let search = state.faqSearchResults;
      return search ? search.data : [];
    },
    mostPopularTags(state) {
      let tags = state.mostPopularTags;
      return tags ? tags.data : [];
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
    },
    commitMostPopularTags(state, tags) {
      state.mostPopularTags = tags;
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
    fetchFaqOverviewList({ commit, state }, { force } = {}) {
      let current = state.faqsOverview;

      if (
        !current ||
        force ||
        moment().isAfter(moment(current["generated-at"]).add(5, "minutes"))
      ) {
        api.get("faqs").then(response => {
          commit("commitFaqOverviewList", response.data);
        });
      }
    },
    fetchFaq({ commit, state }, { id, force } = {}) {
      if (!id) {
        return;
      }

      let current = state.faqs[id];

      if (
        !current ||
        force ||
        moment().isAfter(moment(current["generated-at"]).add(5, "minutes"))
      ) {
        api.get(`faq/${id}`).then(response => {
          commit("commitFaq", response.data);
        });
      }
    },
    fetchMostPopularTags({ commit, state }, { force } = {}) {
      let current = state.mostPopularTags;

      if (
        !current ||
        force ||
        moment().isAfter(moment(current["generated-at"]).add(5, "minutes"))
      ) {
        api.get("faqs/popular-tags").then(response => {
          commit("commitMostPopularTags", response.data);
        });
      }
    }
  }
};
