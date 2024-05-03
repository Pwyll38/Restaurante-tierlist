<script setup>

defineProps({
  name: String,
  quality: String,
  price: String,
  ambience: String
})


</script>

<template>
    <div class = "card">
      <h3>{{ name }}</h3>
      <div class = "description">
      <p>Qualidade: {{ quality }}</p>
      <p>Preço: {{ price }}</p>
      <p>Ambiente: {{ ambience }}</p>
      </div>
    </div>
    
    
</template>

<style scoped>
.card{
  margin: 2em
}
.card:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.description{
  text-align: left
}
</style>