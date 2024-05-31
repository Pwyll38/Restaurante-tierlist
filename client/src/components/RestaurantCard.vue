<script setup>

import { useFetch } from '../controller/useFetch';

const { getAll, createRestaurant, deleteRestaurantByName } = useFetch();

defineProps({
  name: String,
  quality: Number,
  price: Number,
  ambience: Number
})


</script>

<template>
    <div class = "card">
      <h3>{{ name }}</h3>
      <div class = "descript<RestaurantCard name={{ restaurant.name }} quality={{ restaurant.quality }} price={{ restaurant.price }} ambience={{ restaurant.ambience }} />ion">
      <p>Qualidade: {{ quality }}</p>
      <p>Preço: {{ price }}</p>
      <p>Ambiente: {{ ambience }}</p>

      <button @click="deleteRestaurantByName(this.name)">Delete</button>
      </div>
    </div>
    
    
</template>

<style scoped>
.card{
  margin: 2em;
  border: 0.4em solid white;
  text-align: left;
}
.card:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.description{
  text-align: left
}
</style>