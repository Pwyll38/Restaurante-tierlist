<script>
import router from "../router/index"
import { ref } from "vue";
import { useFetch } from '../controller/useFetch';
import controler from "../controller/restaurant"

export default {
  name: 'RestaurantCardEdit',

  props: {
    id: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    quality: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    ambience: {
      type: String,
      required: true
    }
  },

  setup() {

    const { updateRestaurant } = useFetch()

    const nameNew = ref("")
    const priceNew = ref("")
    const qualityNew = ref("")
    const ambienceNew = ref("")

    return {
      updateRestaurant,
      nameNew,
      priceNew,
      qualityNew,
      ambienceNew
    }
  },
  methods: {

    async treatInputs() {
      if (this.nameNew == "") {
        this.nameNew = this.name
      }
      if (this.priceNew == "") {
        this.priceNew = this.price
      }
      if (this.qualityNew == "") {
        this.qualityNew = this.quality
      }
      if (this.ambienceNew == "") {
        this.ambienceNew = this.ambience
      }
    },

    async confirmEdit() {
      try {
        this.treatInputs()

        await controler.updateRestaurant({
          id: this.id,
          name: this.nameNew,
          quality: this.qualityNew,
          price: this.priceNew,
          ambience: this.ambienceNew
        },
          this.id);
      } catch (error) {
        console.log("Erro ao editar" + error);
      }

      router.push('/')
    }
  }
}


</script>

<template>
  <p>Name: {{ name }}</p>
  <p>Quality: {{ quality }}</p>
  <p>Price: {{ price }}</p>
  <p>Ambience: {{ ambience }}</p>

  <input type="text" v-model="nameNew" placeholder="New name">
  
  <div class="inputs">
    <select v-model="qualityNew" placeholder="New quality">
      <option value="0">0</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
    </select>
  </div>
    <div class="inputs">
    <select v-model="priceNew" placeholder="New price">
      <option value="0">0</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
    </select>
    </div>

    <div class="inputs">
    <select v-model="ambienceNew" placeholder="New ambience">
      <option value="0">0</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
      <option value="8">8</option>
      <option value="9">9</option>
      <option value="10">10</option>
    </select>

  </div>

  <button @click="$router.push('/')">Cancel</button>

  <button @click="confirmEdit">Confirm</button>
</template>

<style scoped></style>