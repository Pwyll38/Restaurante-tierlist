<script>

import { useFetch } from '../controller/useFetch';
import controller from "../controller/restaurant"


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

  setup() {
    const { deleteRestaurantByName } = useFetch();

    return {
      deleteRestaurantByName
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
    },

    async deletarPorNome() {
      try {
        await controller.deleteRestaurantByName(this.name)
        window.location.reload()
      } catch (error) {
        console.log("erro" + error);
      }
    },
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

      <button @click="deletarPorNome">Delete</button>

      <button @click="navegateToEdit">Edit</button>




    </div>
  </div>


</template>

<style scoped>
.card {
  margin: 2em;
  border: 0.4em solid white;
  text-align: left;
  width: 50em;
}

.card:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.description {
  text-align: left
}
</style>