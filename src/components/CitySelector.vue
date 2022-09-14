<template>
  <div class="city-container flex column ai-center">
    <h1 class="logo">Weather App</h1>
    <select class="city-select" v-model="selected" @change="getCityWeather">
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
      const getData = async function (url) {
        try {
          const response = await axios.get(url);
          const cityWeather = await response.data.data;
          this.valid = true;
          this.$emit("get-city-weather", cityWeather);
        } catch (err) {
          this.valid = false;
          console.error(err.message);
        }
      };

      getData.call(
        this,
        `https://api.weatherbit.io/v2.0/forecast/daily?city=${cityName}&country=${country}&description&key=${key}`
      );
    },
  },
};
</script>
