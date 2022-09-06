<template>
  <city-selector></city-selector>
  <div class="weather">
    <weather-display
      class="container today"
      :weather-desc="weatherDesc"
      :today-weather="todayWeather"
    ></weather-display>
    <weather-display
      class="container tomorrow"
      :weather-desc="weatherDesc"
      :tomorrow-weather="tomorrowWeather"
    ></weather-display>
  </div>
</template>

<script>
export default {
  data() {
    return {
      weatherDesc: "Cloudy",
      todayWeather: {
        day: "1",
        temperature: "+28 ºC",
        wind: "23 km/h",
      },
      tomorrowWeather: {
        day: "2",
        temperature: "+24 ºC",
        wind: "23 km/h",
      },
    };
  },
  methods: {},
};
</script>

<style>
:root {
  height: 100%;
  box-sizing: border-box;
  font-size: 62.5%;
  font-family: "Scada", sans-serif;
  --very-cold: #456bdc;
  --cold-temp: #58c3e7;
  --hot-temp: #ffd000;
  --very-hot: #ff5900;
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
  width: 80%;

  padding: 3rem;
  border-radius: 1rem;

  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
}

select {
  width: 100%;

  font-family: inherit;
  font-size: 1.8rem;
  outline: none;
  border: 3px solid var(--very-cold);
  border-radius: 1rem;
  padding: 1rem 2rem;
}

button {
  flex-basis: 50%;
  color: white;
  flex-grow: 1;
  background-color: var(--very-cold);
  cursor: pointer;
  font-weight: bold;
  font-family: inherit;
  font-size: 1.6rem;
  border: 3px solid transparent;

  border-radius: 1rem;
  padding: 1rem 2rem;
  min-width: max-content;
}

.invalid-msg {
  color: rgb(249, 188, 239);
  font-size: 1.8rem;

  position: absolute;
  bottom: -2.2 rem;
  left: 1rem;
}

.hidden {
  display: none;
}

.weather {
  gap: 5rem;

  display: flex;
  align-items: center;
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

.celsius {
  background-color: var(--hot-temp);
  font-size: 3.8em;
  font-weight: bold;

  width: fit-content;
  white-space: nowrap;
  padding: 0 1rem;
  border-radius: 5px;
}

.very-cold {
  background-color: var(--very-cold);
}

.cold {
  background-color: var(--cold-temp);
}

.hot {
  background-color: var(--hot-temp);
}

.very-hot {
  background-color: var(--very-hot);
}

.wind {
  font-size: 2.4em;
}
</style>
