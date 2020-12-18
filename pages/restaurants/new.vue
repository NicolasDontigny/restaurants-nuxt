<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <h1>Add a Restaurant</h1>
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model.number="userRating"
      type="number"
      :rules="userRatingRules"
      label="Rating"
      required
    ></v-text-field>

    <v-text-field v-model="address" label="Address" required></v-text-field>

    <v-text-field v-model="imagePath" label="Image URL" required></v-text-field>

    <v-select
      v-model="select"
      :items="cuisines"
      :rules="[v => !!v || 'Item is required']"
      label="Cuisine"
      required
    ></v-select>

    <v-btn :disabled="!valid" color="success" class="mr-4" @click="submitForm">
      Submit
    </v-btn>

    <v-btn color="error" class="mr-4" @click="reset">
      Reset Form
    </v-btn>

    <v-btn color="warning" @click="resetValidation">
      Reset Validation
    </v-btn>
  </v-form>
</template>

<script>
import Vue from "vue";
export default {
  data: () => ({
    valid: true,
    name: "",
    nameRules: [v => !!v || "Name is required"],
    userRating: null,
    userRatingRules: [
      v => !!v || "User Rating is required",
      v => (v && v > 0 && v <= 5) || "Rating must be between 1 and 5"
    ],
    address: "",
    imagePath: "",
    select: null,
    cuisines: [
      "Vegetarian",
      "Thai",
      "Sushi",
      "Soul Food",
      "Québécois",
      "Healthy Food"
    ]
  }),
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      console.log("this.name: ", this.name);
      console.log("this.userRating: ", this.userRating);
      this.$refs.form.resetValidation();
    },
    submitForm() {
      console.log("this.userRating: ", this.userRating);
      this.validate();

      if (!this.valid) return;

      const newRestaurant = {
        name: this.name,
        userRating: this.userRating,
        address: this.address,
        imagePath: this.imagePath,
        cuisine: this.select
      };

      this.$store.dispatch("restaurants/addRestaurant", {
        newRestaurant
      });
    }
  }
};
</script>
