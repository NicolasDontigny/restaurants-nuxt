<template>
  <base-card>
    <template #header>
      <h2>{{ restaurant.name }}</h2>
    </template>
    <template #content>
      <img
        v-if="restaurant.imagePath"
        :src="restaurant.imagePath"
        :alt="restaurant.name + '-restaurant-image'"
      />
      <div>
        <base-ratings :rating="restaurant.rating"></base-ratings>
      </div>
    </template>
    <template #footer>
      <base-green-button
        class="footer-item"
        :rating="restaurant.userRating"
        text="stars"
      ></base-green-button>
      <span class="address">{{ restaurant.address }}</span>
      <span class="delete" @click="removeRestaurant">DELETE</span>
    </template>
  </base-card>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: ["restaurant"],
  methods: {
    removeRestaurant() {
      this.$store.dispatch("restaurants/removeRestaurant", {
        id: this.restaurant.id
      });
    }
  }
});
</script>

<style lang="less" scoped>
img {
  width: 100%;
  height: 250px;
}

.footer-item {
  margin-right: 8px;
}

.address {
  color: black;
}

.delete {
  background-color: red;
  padding: 5px;
  color: white;
}
</style>
