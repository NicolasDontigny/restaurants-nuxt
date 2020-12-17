<template>
  <div>
    <h1>{{ title }}</h1>
    <div class="restaurants-container">
      <restaurant-card
        v-for="restaurant in restaurants"
        :key="restaurant.id"
        :restaurant="restaurant"
      ></restaurant-card>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  async asyncData({ $axios }) {
    const restaurantsData = await $axios.$get(
      "https://developers.zomato.com/api/v2.1/search?entity_id=294&entity_type=city&cuisines=308%2C95%2C177%2C461%2C511%2C143",
      {
        headers: { "user-key": process.env.VUE_APP_ZOMATO_KEY }
      }
    );

    const restaurantDetails = restaurantsData.restaurants.map(
      restaurantObject => {
        const restaurantInfo = restaurantObject.restaurant;
        return {
          id: restaurantInfo.id,
          name: restaurantInfo.name,
          userRating: restaurantInfo.user_rating.aggregate_rating,
          imagePath: restaurantInfo.featured_image,
          cuisines: restaurantInfo.cuisines,
          address: restaurantInfo.location.address,
          photos_url: restaurantInfo.photos_url
        };
      }
    );
    console.log("restaurantDetails: ", restaurantDetails);

    return {
      title: "Restaurants",
      restaurants: restaurantDetails
    };
  }
});
</script>

<style scoped>
.restaurants-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 8px;
  grid-row-gap: 8px;
  width: 100%;
}

li {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
