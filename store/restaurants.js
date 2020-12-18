import { restaurantsDataService } from "~/data-services/restaurants.data-service";

export const state = () => ({
  restaurants: [],
  secret: "Message Cook Islands"
});

export const mutations = {
  FETCH_RESTAURANTS(state, payload) {
    const restaurantDetails = payload.map(restaurantArray => {
      const id = restaurantArray[0];
      const restaurantInfo = restaurantArray[1];
      return {
        id,
        name: restaurantInfo.name,
        userRating: parseInt(restaurantInfo.userRating, 10),
        imagePath: restaurantInfo.imagePath,
        cuisine: restaurantInfo.cuisine,
        address: restaurantInfo.address
      };
    });
    state.restaurants = restaurantDetails;
  },
  ADD_RESTAURANT(state, payload) {
    state.restaurants.unshift(payload);
    this.$router.replace("/restaurants");
  },
  REMOVE_RESTAURANT(state, id) {
    const index = state.restaurants.indexOf(restaurant => restaurant.id === id);
    state.restaurants.splice(index, 1);
  }
};

export const actions = {
  async fetchRestaurants({ commit }) {
    restaurantsDataService.getRestaurants().then(restaurantsData => {
      commit("FETCH_RESTAURANTS", Object.entries(restaurantsData.data));
    });
  },
  async removeRestaurant({ commit }, payload) {
    const id = payload.id;

    restaurantsDataService.removeRestaurant(id).then(response => {
      console.log("delete response: ", response);

      commit("REMOVE_RESTAURANT", id);
    });
  },
  async addRestaurant({ commit }, payload) {
    const newRestaurant = payload.newRestaurant;
    restaurantsDataService.addRestaurant(newRestaurant).then(response => {
      console.log("response: ", response);
      newRestaurant.id = response.name;

      commit("ADD_RESTAURANT", newRestaurant);
    });
  }
};

export const getters = {
  secret(state) {
    return state.secret;
  },
  restaurants(state) {
    return state.restaurants;
  }
};
