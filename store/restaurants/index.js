import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const restaurantsModule = {
  state: {
    restaurants: [],
    secret: "Message Cook Islands"
  },
  mutations: {
    fetchRestaurants(state, payload) {
      // const restaurantsData = await $axios.$get(
      //   "https://developers.zomato.com/api/v2.1/search?entity_id=294&entity_type=city&cuisines=308%2C95%2C177%2C461%2C511%2C143",
      //   {
      //     headers: { "user-key": process.env.VUE_APP_ZOMATO_KEY }
      //   }
      // );
      // const restaurantDetails = restaurantsData.restaurants.map(
      //   restaurantObject => {
      //     const restaurantInfo = restaurantObject.restaurant;
      //     return {
      //       id: restaurantInfo.id,
      //       name: restaurantInfo.name,
      //       userRating: restaurantInfo.user_rating.aggregate_rating,
      //       imagePath: restaurantInfo.featured_image,
      //       cuisines: restaurantInfo.cuisines,
      //       address: restaurantInfo.location.address,
      //       photos_url: restaurantInfo.photos_url
      //     };
      //   }
      // );
      // console.log("restaurantDetails: ", restaurantDetails);
    }
  },
  getters: {
    secret(state) {
      return state.secret;
    }
  }
};

export default restaurantsModule;
