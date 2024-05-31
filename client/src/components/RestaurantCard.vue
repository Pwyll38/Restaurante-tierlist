<script>

import { useFetch } from '../controller/useFetch';

const { deleteRestaurantByName } = useFetch();

export default {
  name: "Card",

  props: {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    quality: {
      type: Number,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    ambience: {
      type: Number,
      required: true
    }
  },

  methods: {
    navegateToEdit() {


      this.$router.push({
        path: '/edit', query: {
          id: this.id,
          name: this.name,
          quality: this.quality,
          price: this.price,
          ambience: this.ambience
        }
      })
    }
  }
}


</script>

<template>
  <div class="card">
    <h3>{{ name }}</h3>
    <div class="Description">
      <p>Qualidade: {{ quality }}</p>
      <p>Preço: {{ price }}</p>
      <p>Ambiente: {{ ambience }}</p>

      <button @click="deleteRestaurantByName(this.name)">Delete</button>

      <button @click="navegateToEdit">Edit</button>




    </div>
  </div>


</template>

<style scoped>
.card {
  margin: 2em;
  border: 0.4em solid white;
  text-align: left;
}

.card:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.description {
  text-align: left
}
</style>