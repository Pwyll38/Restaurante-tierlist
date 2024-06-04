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
  },

  setup() {

    const { createRestaurant } = useFetch()

    const nameNew = ref("")
    const priceNew = ref("")
    const qualityNew = ref("")
    const ambienceNew = ref("")
    const disabledCreate = true

    return {
      createRestaurant,
      nameNew,
      priceNew,
      qualityNew,
      ambienceNew,
      disabledCreate
    }
  },
  methods: {

    async treatInputs(){
      if(this.nameNew==""){
        console.log("Error: Missing value Name");
        this.nameNew="MissingName"+this.id
      }
      if(this.priceNew===""){
        console.log("Error: Missing value Price");
        this.priceNew="0"
      }
      if(this.qualityNew===""){
        console.log("Error: Missing value Quality");
        this.qualityNew="0"
      }
      if(this.ambienceNew===""){
        console.log("Error: Missing value Ambience");
        this.ambienceNew="0"
      }
    },

    async confirmCreate() {
      try {
        this.treatInputs()

        await controler.createRestaurant({
          id: this.id,
          name: this.nameNew,
          quality: this.qualityNew,
          price: this.priceNew,
          ambience: this.ambienceNew
        });

      } catch (error) {
        console.log("Erro ao editar" + error);
      }

      router.push('/')
    }
  },
  computed:{
    isDisabled(){
      return (this.nameNew==""||this.priceNew===""||this.qualityNew===""||this.ambienceNew==="")
    }
  }
}


</script>

<template>

  <input type="text" v-model="nameNew" placeholder="New name">
  <input type="number" max="10" min="0" v-model="qualityNew" placeholder="New quality">
  <input type="number" max="10" min="0" v-model="priceNew" placeholder="New price">
  <input type="number" max="10" min="0" v-model="ambienceNew" placeholder="New ambience">


  <button @click="$router.push('/')">Cancel</button>

  <button @click="confirmCreate" :disabled="isDisabled">Confirm</button>
</template>

<style scoped></style>