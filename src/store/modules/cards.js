import api from "@/modules/api-request";

export default {
  namespaced: true,
  state: {
    cards: null
  },
  getters: {
    getCards: state => {
      return state.cards ? state.cards : [];
    }
  },
  mutations: {
    setCards(state, cards) {
      state.cards = cards;
    }
  },
  actions: {
    fetchCards({ commit, getters }) {
      if (getters.getCards.length) {
        return;
      }

      api.get("cards").then(response => {
        commit("setCards", response.data);
      });
    }
  }
};
