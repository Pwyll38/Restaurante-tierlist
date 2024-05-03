<script setup>
import RestaurantCard from './components/RestaurantCard.vue'
</script>

<template>
  <RestaurantCard name="Teste" quality="1" price = "1" ambience = "1"/>
  <RestaurantCard name="Teste" quality="1" price = "1" ambience = "1"/>
  <RestaurantCard name="Teste" quality="1" price = "1" ambience = "1"/>
</template>

<style scoped>
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
