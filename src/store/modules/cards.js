import axios from "axios";

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

      axios({
        url: "http://localhost:8890/cards",
        headers: { "Content-Type": "application/json" }
      }).then(response => {
        commit("setCards", response.data);
      });
    }
  }
};
