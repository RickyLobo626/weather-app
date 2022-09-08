import { createApp } from "vue";
import App from "./App.vue";
import CitySelector from "./components/CitySelector.vue";
import WeatherDisplay from "./components/WeatherDisplay.vue";
import "./styles.css";

const app = createApp(App);

app.component("city-selector", CitySelector);
app.component("weather-display", WeatherDisplay);
app.mount("#app");
