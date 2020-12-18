import { restaurantsRest } from "~/data-services/rest/restaurants.rest";

export const restaurantsDataService = {
  getRestaurants: restaurantsRest.getRestaurants,
  addRestaurant: restaurantsRest.addRestaurant,
  removeRestaurant: restaurantsRest.removeRestaurant
};
