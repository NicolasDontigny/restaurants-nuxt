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
  computed: {
    restaurants() {
      return this.$store.getters["restaurants/restaurants"];
    }
  },
  asyncData() {
    return {
      title: "Restaurants"
    };
  },
  created() {
    this.$store.dispatch("restaurants/fetchRestaurants");
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
