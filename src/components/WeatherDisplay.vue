<template>
  <div v-if="weatherData">
    <img
      v-if="itsSunny()"
      class="weather-img"
      src="../../src/assets/sunny.png"
      alt="Sun"
    />
    <img
      v-else-if="itsStormy()"
      class="weather-img"
      src="../../src/assets/storm.png"
      alt="Storm"
    />
    <img
      v-else-if="itsRainy()"
      class="weather-img"
      src="../../src/assets/rain.png"
      alt="Rain"
    />
    <img
      v-else-if="itsNotSoCloudy()"
      class="weather-img"
      src="../../src/assets/cloudy2.png"
      alt="Sun and Clouds"
    />
    <img
      v-else
      class="weather-img"
      src="../../src/assets/cloudy.png"
      alt="Clouds"
    />
    <div class="info">
      <h2 v-if="weatherData.displaySize === 'big'" class="day">
        {{ weatherData.day }}
      </h2>
      <h3 v-else class="day">{{ weatherData.day }}</h3>
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
  methods: {
    itsSunny() {
      if (
        this.weatherData.weather?.description.toLowerCase().includes("sun") ||
        this.weatherData.weather?.description
          .toLowerCase()
          .includes("few clouds") ||
        this.weatherData.weather?.description
          .toLowerCase()
          .includes("scattered clouds")
      ) {
        return true;
      }
      return false;
    },

    itsStormy() {
      if (
        this.weatherData.weather?.description.toLowerCase().includes("storm")
      ) {
        return true;
      }
      return false;
    },

    itsRainy() {
      if (
        this.weatherData.weather?.description.toLowerCase().includes("rain")
      ) {
        return true;
      }
      return false;
    },

    itsNotSoCloudy() {
      if (
        this.weatherData.weather?.description.toLowerCase().includes("less") ||
        this.weatherData.weather?.description.toLowerCase().includes("broken")
      ) {
        return true;
      }
      return false;
    },
  },
};
</script>
