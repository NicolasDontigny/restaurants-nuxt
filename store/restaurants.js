import { apiRoutes } from "~/constants/api-routes.constants";

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
    console.log("mutation payload: ", payload);
    state.restaurants.unshift(payload);
  }
};

export const actions = {
  async fetchRestaurants({ commit }) {
    console.log(
      "apiRoutes getRestaurants: ",
      apiRoutes.restaurants.getRestaurants()
    );
    // const restaurantsData = await this.$axios.$get(
    //   "https://developers.zomato.com/api/v2.1/search?entity_id=294&entity_type=city&cuisines=308%2C95%2C177%2C461%2C511%2C143",
    //   {
    //     headers: { "user-key": process.env.VUE_APP_ZOMATO_KEY }
    //   }
    // );
    const restaurantsData = await this.$axios.$get(
      apiRoutes.restaurants.getRestaurants()
    );

    commit("FETCH_RESTAURANTS", Object.entries(restaurantsData));
  },
  async addRestaurant({ commit }, payload) {
    const newRestaurant = payload.newRestaurant;
    const response = await this.$axios.$post(
      "https://restaurants-aa0cd-default-rtdb.firebaseio.com/restaurants.json",
      newRestaurant
    );

    newRestaurant.id = response.name;

    commit("ADD_RESTAURANT", newRestaurant);
    this.$router.replace("/restaurants");
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
