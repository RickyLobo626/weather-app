<template>
  <city-selector @get-city-weather="getCityWeather"></city-selector>
  <section class="now flex jc-center">
    <weather-display
      class="container flex column"
      v-for="(firstDay, i) in firstTwoDays"
      :first-two-days="firstTwoDays"
      :key="i"
      :day="i"
    ></weather-display>
  </section>
  <section class="future grid">
    <weather-display
      class="container flex column"
      v-for="(otherDay, i) in otherDays"
      :other-days="otherDays"
      :key="i"
      :day="i"
    ></weather-display>
  </section>
</template>

<script>
import WeatherData from "./classes/WeatherData.js";
export default {
  data() {
    return {
      firstTwoDays: [],
      otherDays: [],
      day: null,
    };
  },
  methods: {
    getCityWeather(days) {
      this.firstTwoDays = [];
      this.otherDays = [];
      const dayCount = 10;
      for (const [i, day] of days.entries()) {
        if (i === dayCount) break;
        if (i < 2) {
          this.firstTwoDays.push(
            new WeatherData(
              day.datetime,
              day.weather.icon,
              day.weather.description,
              day.max_temp,
              day.low_temp,
              day.wind_spd
            )
          );
          continue;
        }

        this.otherDays.push(
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
