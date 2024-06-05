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

    async treatInputs(){
      if(this.nameNew==""){
        this.nameNew=this.name
      }
      if(this.priceNew==""){
        this.priceNew=this.price
      }
      if(this.qualityNew==""){
        this.qualityNew=this.quality
      }
      if(this.ambienceNew==""){
        this.ambienceNew=this.ambience
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
  <div class = "inputs">
    <input type="number" max="10" min="0" v-model="qualityNew" placeholder="New quality">
  <input type="number" max="10" min="0" v-model="priceNew" placeholder="New price">
  <input type="number" max="10" min="0" v-model="ambienceNew" placeholder="New ambience">
    </div>

  <button @click="$router.push('/')">Cancel</button>

  <button @click="confirmEdit">Confirm</button>
</template>

<style scoped>

</style>