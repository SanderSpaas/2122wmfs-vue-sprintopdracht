import axios from "axios";
export default {
  namespaced: true,
  state() {
    return {};
  },
  getters: {
    bananen(state) {
      return state.bananen;
    },
    peren(state) {
      return state.peren;
    },
    appels(state) {
      return state.appels;
    },
  },
  mutations: {
    removeAppel(state, appel) {
      state.appels = state.appels.filter((item) => item.id !== appel.id);
    },
  },
  actions: {
    getBananen(context, count) {
      axios
        .get(
          `https://hub.dummyapis.com/singlelistwithid?text=banaan&noofRecords=${count}`
        )
        .then(function ({ data }) {
          // handle success
          console.log(data);
          data.map((item) => {
            item.naam = "banaan";
            item.prijs = 10;
            item.emoji = "🍌";
            item.artNr = btoa(
              item.name +
                Math.random()
                  .toString(36)
                  .replace(/[^a-z]+/g, "")
                  .substr(0, 3)
            );
            return item;
          });
          context.commit("addBananen", data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    },
    getPeren(context, count) {
      axios
        .get(
          `https://hub.dummyapis.com/singlelistwithid?text=peer&noofRecords=${count}`
        )
        .then(function ({ data }) {
          // handle success
          console.log(data);
          data.map((item) => {
            item.naam = "peer";
            item.prijs = 0.82;
            item.emoji = "🍐";
            item.artNr = btoa(
              item.name +
                Math.random()
                  .toString(36)
                  .replace(/[^a-z]+/g, "")
                  .substr(0, 3)
            );
            return item;
          });
          context.commit("addPeren", data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    },
    getAppels(context, count) {
      axios
        .get(
          `https://hub.dummyapis.com/singlelistwithid?text=appel&noofRecords=${count}`
        )
        .then(function ({ data }) {
          // handle success
          console.log(data);
          data.map((item) => {
            item.naam = "appel";
            item.prijs = 0.6;
            item.emoji = "🍎";
            item.artNr = btoa(
              item.name +
                Math.random()
                  .toString(36)
                  .replace(/[^a-z]+/g, "")
                  .substr(0, 3)
            );
            return item;
          });
          context.commit("addAppels", data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    },
    buyBanaan(context, banaan) {
      //verwijder banaan uit lijst
      context.commit("removeBanaan", banaan);

      //banaan aan mandje toevoegen
      context.commit("addToBasket", banaan, {
        root: true,
      });
    },
    buyPeer(context, peer) {
      //verwijder peer uit lijst
      context.commit("removePeer", peer);

      //peer aan mandje toevoegen
      context.commit("addToBasket", peer, {
        root: true,
      });
    },
    buyAppel(context, appel) {
      //verwijder appel uit lijst
      context.commit("removeAppel", appel);

      //appel aan mandje toevoegen
      context.commit("addToBasket", appel, {
        root: true,
      });
    },
  },
};
