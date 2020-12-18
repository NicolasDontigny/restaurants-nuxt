import axios from "axios";
import { apiRoutes } from "~/constants/api-routes.constants";

export const restaurantsRest = {
  getRestaurants() {
    return axios
      .create({
        baseURL: apiRoutes.restaurants.getRestaurants()
        // buildUrl: apiRoutes.restaurants.getRestaurants()
      })
      .get();
  },
  addRestaurant(newRestaurant) {
    console.log("newRestaurant: ", newRestaurant);
    return axios
      .create({
        method: "POST",
        baseURL: apiRoutes.restaurants.addRestaurant()
      })
      .post("", newRestaurant);
    // return axios.post(
    //   apiRoutes.restaurants.addRestaurant(),
    //   {

    //   }
    // )
  },
  removeRestaurant(id) {
    return axios
      .create({
        method: "DELETE",
        baseURL: apiRoutes.restaurants.removeRestaurant(id)
      })
      .delete();
  }
};
