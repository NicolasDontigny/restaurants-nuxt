import Vue from "vue";
import Vuex from "vuex";
import restaurantsModule from "./restaurants/index";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: [restaurantsModule]
});
