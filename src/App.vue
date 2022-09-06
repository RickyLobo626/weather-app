<template>
  <city-selector @get-city-weather="getCityWeather"></city-selector>
  <div class="weather">
    <weather-display
      :today-weather="todayWeather"
      class="container today"
    ></weather-display>
    <weather-display
      :tomorrow-weather="tomorrowWeather"
      class="container tomorrow"
    ></weather-display>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todayWeather: "",
      tomorrowWeather: "",
    };
  },
  methods: {
    getCityWeather(data) {
      this.todayWeather = data[0];
      this.tomorrowWeather = data[1];
      this.todayWeather["day"] = "today";
      this.tomorrowWeather["day"] = "tomorrow";
    },
  },
};
</script>

<style>
:root {
  height: 100%;
  box-sizing: border-box;
  font-size: 62.5%;
  font-family: "Scada", sans-serif;
  --min-temp: #58c3e7;
  --max-temp: #ffb300;
}

*,
*::before,
*::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

body {
  height: 100%;
  background-image: url(./assets/bc.jpg);
  background-position: 0 70%;
}

header {
  color: white;
  font-size: 5.4rem;
  font-weight: bold;
  text-align: center;

  padding: 1rem;
}

.wrapper {
  min-width: 50rem;
}

#app {
  max-width: 70rem;

  margin: 0 auto;
  padding: 5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
}

.city-container {
  width: 60%;
  min-width: 30rem;
  border-radius: 1rem;
  margin-bottom: 4rem;

  position: relative;
}

select {
  width: 100%;

  font-family: inherit;
  font-size: 1.8rem;
  outline: none;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);
  border-radius: 1rem;
  padding: 1rem 2rem;
}

.invalid-msg {
  width: max-content;
  color: rgb(255, 186, 202);
  font-weight: bold;
  font-size: 1.8rem;

  position: absolute;
  bottom: -3rem;
  left: 5px;
}

.hidden {
  display: none;
}

.weather {
  display: flex;
  align-items: center;
  gap: 5rem;
}

.weather-img {
  align-self: center;
  padding: 3rem;
  width: 80%;
}

.container {
  background-color: rgba(210, 210, 210, 0.8);
  border-radius: 2rem;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.4);

  display: flex;
  flex-direction: column;
}

.today {
  flex-basis: 55%;
}

.tomorrow {
  flex-basis: 45%;
}

.info {
  padding: 3em;

  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.tomorrow .info {
  font-size: 80%;
}

.day {
  font-size: 2.6em;
  font-weight: bold;
}

.description {
  font-size: 2.2em;
  padding-bottom: 1em;
  border-bottom: 2px solid black;
}

.temps {
  display: flex;
  justify-content: space-between;
}

.temp {
  font-size: 3.8em;
  font-weight: bold;

  width: fit-content;
  white-space: nowrap;
  padding: 0 1rem;
  border-radius: 5px;
}

.min {
  background-color: var(--min-temp);
}

.max {
  background-color: var(--max-temp);
}

.wind {
  font-size: 2.4em;
}

@media (max-width: 37.5em) {
  :root {
    font-size: 45%;
  }
}

@media (max-width: 25em) {
  :root {
    font-size: 35%;
  }
}
</style>
