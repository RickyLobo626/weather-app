export default class WeatherData {
  constructor(date, icon, weatherDesc, maxTemp, minTemp, windSpeed) {
    this.date = date;
    this.icon = icon;
    this.weatherDesc = weatherDesc;
    this.maxTemp = maxTemp;
    this.minTemp = minTemp;
    this.windSpeed = windSpeed;
  }
}
