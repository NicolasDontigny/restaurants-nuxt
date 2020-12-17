// import Vue from "vue";
// import Vuex from "vuex";

// Vue.use(Vuex);

export const state = () => ({
  restaurants: [],
  secret: "Message Cook Islands"
});
export const getters = () => ({
  secret(state) {
    return state.secret;
  }
});

// const restaurantsModule = {
//   state: {
//     restaurants: [],
//     secret: "Message Cook Islands"
//   },
//   mutations: {},
//   getters: {
//     secret(state) {
//       return state.secret;
//     }
//   }
// };

// export default restaurantsModule;
