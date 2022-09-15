<template>
  <city-selector @get-city-weather="getCityWeather"></city-selector>
  <section class="now flex jc-center">
    <weather-display
      class="weather-component flex column"
      :class="[revealed ? 'revealed' : '']"
      v-for="(firstDay, i) in firstTwoDays"
      :first-two-days="firstTwoDays"
      :key="i"
      :day="i"
    ></weather-display>
  </section>
  <section class="future">
    <weather-display
      class="weather-component flex column"
      :class="[revealed ? 'revealed' : '']"
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
      revealed: false,
      day: null,
    };
  },
  methods: {
    showWeather(arr, day) {
      arr.push(
        new WeatherData(
          day.datetime,
          day.weather.icon,
          day.weather.description,
          day.max_temp,
          day.low_temp,
          day.wind_spd
        )
      );
    },
    getCityWeather(days) {
      this.revealed = false;

      const delayTimeMs = 20;

      setTimeout(() => {
        this.firstTwoDays = [];
        this.otherDays = [];
        this.revealed = true;

        const dayCount = 10;
        for (const [i, day] of days.entries()) {
          if (i === dayCount) break;
          if (i < 2) this.showWeather(this.firstTwoDays, day);
          else this.showWeather(this.otherDays, day);
        }
      }, delayTimeMs);
    },
  },
};
</script>
