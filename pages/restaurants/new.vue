<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <h1>{{ secret }}</h1>
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="userRating"
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

    <!-- <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox> -->

    <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">
      Validate
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
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    userRating: null,
    userRatingRules: [
      v => !!v || "User Rating is required",
      v => (v && v <= 5) || "E-mail must be valid"
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
    // checkbox: false
  }),
  computed: {
    secret() {
      return this.$store.getters["restaurants/secret"];
    }
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>
