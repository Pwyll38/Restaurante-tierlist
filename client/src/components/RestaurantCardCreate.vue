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
  
  <div class="inputs">
    <h4>Quality</h4>
    <select v-model="qualityNew" placeholder="New quality" class = "select">
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
      <h4>Price</h4>
    <select v-model="priceNew" placeholder="New price" class = "select">
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
      <h4>Ambience</h4>
    <select v-model="ambienceNew" placeholder="New ambience" class = "select">
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

  <button @click="confirmCreate" :disabled="isDisabled">Confirm</button>
</template>

<style scoped>
.select{
  width: 8em;
}
</style>