<template>
  <div>
    <img
      v-if="weatherDesc.includes('sun')"
      class="weather-img"
      src="../../src/assets/sunny.png"
      alt="Sun"
    />
    <img
      v-else-if="weatherDesc.includes('storm')"
      class="weather-img"
      src="../../src/assets/storm.png"
      alt="Storm"
    />
    <img
      v-else-if="weatherDesc.includes('rain')"
      class="weather-img"
      src="../../src/assets/rain.png"
      alt="Rain"
    />
    <img
      v-else
      class="weather-img"
      src="../../src/assets/cloudy.png"
      alt="Clouds"
    />
    <div class="info">
      <h1 class="day">{{ dayData.day === "1" ? "Today" : "Tomorrow" }}</h1>
      <p class="description">{{ weatherDesc }}</p>
      <p class="celsius" :class="celsiusColor">
        {{ dayData.temperature.replace("+", "") }}
      </p>
      <p class="wind">{{ dayData.wind }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["weatherDesc", "todayWeather", "tomorrowWeather"],

  computed: {
    // Get the right day for each component
    dayData() {
      return this.todayWeather || this.tomorrowWeather;
    },
    celsiusColor() {
      if (this.dayData.temperature.slice(0, -3) >= 35) {
        return "very-hot";
      } else if (this.dayData.temperature.slice(0, -3) > 16) {
        return "hot";
      } else if (this.dayData.temperature.slice(0, -3) > 0) {
        return "cold";
      }
      return "very-cold";
    },
  },
};
</script>
