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
    cards: null
  },
  getters: {
    cards: state => {
      let cards = state.cards;
      return cards ? cards.data : [];
    }
  },
  mutations: {
    setCards(state, cards) {
      state.cards = cards;
    }
  },
  actions: {
    fetchCards({ commit, getters }) {
      if (getters.cards.length) {
        return;
      }

      api.get("cards").then(response => {
        commit("setCards", response.data);
      });
    }
  }
};
