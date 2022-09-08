<template>
  <div
    v-if="this.weatherDays"
    :class="[isToday() || isTomorrow() ? 'big' : 'medium']"
  >
    <img
      class="weather-img"
      :src="'https://www.weatherbit.io/static/img/icons/' + image + '.png'"
      alt="weather"
    />
    <div class="info">
      <h2 v-if="isToday" class="day">
        {{ getDay() }}
      </h2>
      <h3 v-else-if="isTomorrow" class="day">{{ getDay() }}</h3>
      <h4 v-else class="day">{{ getDay() }}</h4>
      <p class="description">
        {{ weatherDay.weatherDesc }}
      </p>
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
  props: ["weatherDays", "day"],

  computed: {
    image() {
      return this.weatherDay.icon;
    },

    weatherDay() {
      return this.weatherDays[this.day];
    },
    windSpeedKm() {
      return Math.round(+this.weatherDay?.windSpeed * (18 / 5)) + " km/h";
    },
    roundedMaxTemp() {
      return Math.round(+this.weatherDay?.maxTemp) + " ºC";
    },
    roundedMinTemp() {
      return Math.round(+this.weatherDay?.minTemp) + " ºC";
    },
  },
  methods: {
    isToday() {
      return this.day === 0;
    },
    isTomorrow() {
      return this.day === 1;
    },
    getDay() {
      if (this.day === 0) return "Today";
      else if (this.day === 1) return "Tomorrow";
      return this.weatherDay.date;
    },
  },
};
</script>
