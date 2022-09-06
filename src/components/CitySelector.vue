<template>
  <div class="city-container">
    <select v-model="selected">
      <option disabled value="">Choose a city</option>
      <option v-for="(city, index) in cities" :key="index" :value="city">
        {{ city }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Portugal's Districts
      cities: [
        "Aveiro",
        "Beja",
        "Braga",
        "Bragança",
        "Castelo Branco",
        "Coimbra",
        "Évora",
        "Faro",
        "Guarda",
        "Leiria",
        "Lisboa",
        "Portalegre",
        "Porto",
        "Santarém",
        "Setúbal",
        "Viana do Castelo",
        "Vila Real",
        "Viseu",
      ],
      selected: "",
    };
  },
};
</script>
