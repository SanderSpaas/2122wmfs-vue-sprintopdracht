import { createStore } from "vuex";
import logic from "./logic";
// don't just export an object!
// export a STORE
export default createStore({
  // state, getters, mutations, actions
  getters: {
    basket(state) {
      return state.basket;
    },
    totalPrice(state, getters) {
      let price = 0;
      getters.basket.forEach((element) => {
        price = price + element.prijs;
      });
      return price;
    },
  },
  state() {
    return {
      basket: [],
    };
  },
  mutations: {
    mutations: {
      SetSubject(state, subject) {
        this.subject = subject;
      },
    },
  },
  setters: {},
  actions: {},
  modules: {
    logic,
  },
});
