<template>
  <div v-if="weatherData">
    <img
      v-if="weatherData.weather?.description.toLowerCase().includes('sun')"
      class="weather-img"
      src="../../src/assets/sunny.png"
      alt="Sun"
    />
    <img
      v-else-if="
        weatherData.weather?.description.toLowerCase().includes('storm')
      "
      class="weather-img"
      src="../../src/assets/storm.png"
      alt="Storm"
    />
    <img
      v-else-if="
        weatherData.weather?.description.toLowerCase().includes('rain')
      "
      class="weather-img"
      src="../../src/assets/rain.png"
      alt="Rain"
    />
    <img
      v-else-if="
        weatherData.weather?.description.toLowerCase().includes('less')
      "
      class="weather-img"
      src="../../src/assets/cloudy2.png"
      alt="Sun and clouds"
    />
    <img
      v-else
      class="weather-img"
      src="../../src/assets/cloudy.png"
      alt="Clouds"
    />
    <div class="info">
      <h1 v-if="weatherData.day === 'today'" class="day">Today</h1>
      <h2 v-else class="day">Tomorrow</h2>
      <p class="description">{{ weatherData.weather?.description }}</p>
      <div class="temps">
        <p class="temp max">
          {{ roundedMaxTemp }}
        </p>
        <p class="temp min">
          {{ roundedMinTemp }}
        </p>
      </div>
      <p class="wind">{{ windSpeedKm }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["todayWeather", "tomorrowWeather"],

  computed: {
    // Get the right day for each component
    weatherData() {
      return this.todayWeather || this.tomorrowWeather;
    },

    windSpeedKm() {
      return Math.round(+this.weatherData?.wind_spd * (18 / 5)) + " km/h";
    },
    roundedMaxTemp() {
      return Math.round(+this.weatherData?.max_temp) + " ºC";
    },
    roundedMinTemp() {
      return Math.round(+this.weatherData?.min_temp) + " ºC";
    },
  },
};
</script>
