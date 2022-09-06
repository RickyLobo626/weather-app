<template>
  <div class="city-container">
    <select v-model="selected" @change="getCityWeather">
      <option disabled value="">Choose a city</option>
      <option v-for="(city, index) in cities" :key="index" :value="city">
        {{ city }}
      </option>
    </select>
    <p class="invalid-msg" :class="[invalid ? '' : 'hidden']">
      Sorry, an error has occurred
    </p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  emits: ["get-city-weather"],
  data() {
    return {
      // Portugal's Districts
      cities: [
        "Aveiro",
        "Beja",
        "Braga",
        "Bragança",
        "Castelo Branco",
        "Coimbra",
        "Évora",
        "Faro",
        "Guarda",
        "Leiria",
        "Lisboa",
        "Portalegre",
        "Porto",
        "Santarém",
        "Setúbal",
        "Viana do Castelo",
        "Vila Real",
        "Viseu",
      ],
      selected: "",
      invalid: false,
    };
  },
  methods: {
    getCityWeather() {
      if (!this.selected) return;

      const cityName = this.selected.replaceAll(" ", "+");
      const country = "PT";
      const key = "f2b3a442b3cc4cdea8d2612f91e43c7f";
      // // GET request

      axios
        .get(
          `https://api.weatherbit.io/v2.0/forecast/daily?city=${cityName}&country=${country}&description&key=${key}`
        )
        .then((response) => {
          this.invalid = false;
          const cityWeather = response.data.data;
          console.log(cityWeather);
          this.$emit("get-city-weather", cityWeather);
        })
        .catch((error) => {
          console.log(error);

          this.invalid = true;
        });
    },
  },
};
</script>
