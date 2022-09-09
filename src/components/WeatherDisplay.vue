<template>
  <div
    v-if="this.firstTwoDays || this.otherDays"
    :class="[isToday() || isTomorrow() ? 'big' : 'small']"
  >
    <div class="img-bc flex jc-center">
      <img
        class="weather-img"
        :src="'https://www.weatherbit.io/static/img/icons/' + image + '.png'"
        alt="weather"
      />
    </div>
    <div class="info flex column">
      <h2 v-if="isToday()" class="day">
        {{ getDay() }}
      </h2>
      <h3 v-else-if="isTomorrow()" class="day">{{ getDay() }}</h3>
      <h4 v-else class="day">{{ getDay() }}</h4>
      <p class="description flex ai-center">
        {{ weatherDay.weatherDesc }}
      </p>
      <div class="numbers flex column">
        <div class="temps flex column bold">
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
  </div>
</template>

<script>
export default {
  props: ["firstTwoDays", "otherDays", "day"],

  computed: {
    image() {
      return this.weatherDay.icon;
    },

    weatherDay() {
      // Get the right day for each component
      if (this.firstTwoDays) return this.firstTwoDays[this.day];
      return this.otherDays[this.day];
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
      return this.day === 0 && this.firstTwoDays;
    },
    isTomorrow() {
      return this.day === 1 && this.firstTwoDays;
    },
    getDay() {
      if (this.isToday()) return "Today";
      else if (this.isTomorrow()) return "Tomorrow";
      return this.weatherDay.date;
    },
  },
};
</script>
