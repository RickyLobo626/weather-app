<template>
  <div class="city-container flex column ai-center">
    <h1 class="bold">Weather App</h1>
    <select v-model="selected" @change="getCityWeather">
      <option disabled value="">Choose a city</option>
      <option v-for="(city, index) in cities" :key="index" :value="city">
        {{ city }}
      </option>
    </select>
    <p class="invalid-msg bold" :class="[valid ? 'hidden' : '']">
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
      valid: true,
    };
  },
  methods: {
    getCityWeather() {
      if (!this.selected) return;

      const cityName = this.selected.replaceAll(" ", "+");
      const country = "PT";
      const key = "f2b3a442b3cc4cdea8d2612f91e43c7f";
      // GET request

      axios
        .get(
          `https://api.weatherbit.io/v2.0/forecast/daily?city=${cityName}&country=${country}&description&key=${key}`
        )
        .then((response) => {
          this.valid = true;
          const cityWeather = response.data.data;
          // console.log(cityWeather);
          this.$emit("get-city-weather", cityWeather);
        })
        .catch((error) => {
          console.log(error);

          this.valid = false;
        });
    },
  },
};
</script>
