<template>
  <city-selector @get-city-weather="getCityWeather"></city-selector>
  <div class="weather-grid jc-center">
    <weather-display
      class="container flex column"
      v-for="(weatherDay, i) in weatherDays"
      :weather-days="weatherDays"
      :key="i"
      :day="i"
    ></weather-display>
  </div>
</template>

<script>
import WeatherData from "./classes/WeatherData.js";
export default {
  data() {
    return {
      weatherDays: [],
      day: null,
    };
  },
  methods: {
    getCityWeather(days) {
      this.weatherDays = [];
      const dayCount = 10;
      for (const [i, day] of days.entries()) {
        if (i === dayCount) break;
        this.weatherDays.push(
          new WeatherData(
            day.datetime,
            day.weather.icon,
            day.weather.description,
            day.max_temp,
            day.low_temp,
            day.wind_spd
          )
        );
      }
    },
  },
};
</script>
