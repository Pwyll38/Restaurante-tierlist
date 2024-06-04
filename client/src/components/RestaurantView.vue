<script>
import { ref } from "vue";
import RestaurantCard from './RestaurantCard.vue'
import { useFetch } from '../controller/useFetch';
import controller from "../controller/restaurant"


export default {
  name: "RestaurantView",
  components: {
    RestaurantCard,
  },

  setup() {
    const { getAll, createRestaurant, deleteRestaurantByName } = useFetch();

    const allInfo = ref()
    const nomeRest = ref("")
    const qualiRest = ref("")
    const priceRest = ref("")
    const ambRest = ref("")
    const lastId = 0

    const nameDelete = ref("")

    return {
      getAll,
      createRestaurant,
      deleteRestaurantByName,
      allInfo,
      nomeRest,
      qualiRest,
      priceRest,
      ambRest,
      nameDelete,
      lastId
    }
  },

  async beforeMount() {
    this.allInfo = await this.getAllInfo()
    console.log("ALL INFO: "+ this.allInfo);
    if(this.allInfo==""){
      this.lastId=0
    }else{
      this.lastId = this.getLastId()
    }

  },

  methods: {

    getLastId() {
      if(this.lastId==0){
        return 0
      }
      
      const keys = Object.keys(this.allInfo);
      const lastKey = keys[keys.length - 1];
      const lastValue = this.allInfo[lastKey];

      return lastValue.id
    },

    async getAllInfo() {
      try {
        const resposta = await controller.getAll()

        return resposta

      } catch (error) {
        console.log(error);
      }
    },

    navegateToCreate() {
      this.$router.push({
        path: '/create', query:{
          id: this.getLastId()+1
        }})
    }

  }


}


</script>

<template>

  <div>

    <ul>
      <li v-for="restaurant in allInfo" :key="restaurant.id">
        <RestaurantCard :id="restaurant.id" :name="restaurant.name" :quality="restaurant.quality" :price="restaurant.price"
          :ambience="restaurant.ambience" />
      </li>
    </ul>


    <div>
      <button @click="navegateToCreate">Criar</button>
    </div>

  </div>
</template>

<style scoped>
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

ul {
    list-style-type: none;
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
