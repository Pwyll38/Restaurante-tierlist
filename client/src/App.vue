<script>
import { ref } from "vue";
import RestaurantCard from './components/RestaurantCard.vue'
import { useFetch } from './controller/useFetch';
import controller from "./controller/restaurant"


export default {
  name: "restaurante",
  components: {
    RestaurantCard,
  },

  setup() {
    const { getAll, createRestaurant } = useFetch();

    const allInfo = ref()
    const nomeRest = ref("")
    const qualiRest = ref("")
    const priceRest = ref("")
    const ambRest = ref("")

    return {
      getAll,
      createRestaurant,
      allInfo,
      nomeRest,
      qualiRest,
      priceRest,
      ambRest
    }
  },

  async beforeMount() {
    this.allInfo = await this.getAllInfo()
  },

  methods: {

    async getAllInfo() {
      try {
        const resposta = await controller.getAll()

        if (!resposta) {
          console.log("GetAllInfoError: sem resposta");
        }

        console.log("All:" + JSON.stringify(resposta));

        console.log("Rest:" + JSON.stringify(resposta[3]));

        return resposta

      } catch (error) {
        console.log(error);
      }
    },

    async criar() {
      try {
        console.log(this.nomeRest);
        console.log(this.qualiRest);
        console.log(this.priceRest);
        console.log(this.ambRest);

        const resposta = await controller.createRestaurant({
          id: 11,
          name: this.nomeRest,
          qualidade: this.qualiRest,
          price: this.priceRest,
          ambieance: this.ambRest
        });

        console.log("Resposta: " + resposta);

      } catch (error) {
        console.log("erro" + error);
      }
    }

  }


}


</script>

<template>

  <div>

    <ul>
      <li v-for="restaurant in allInfo" :key="restaurant.id">
        <RestaurantCard 
          :name="restaurant.name" 
          :quality="restaurant.quality" 
          :price="restaurant.price" 
          :ambience="restaurant.ambience" 
        />
      </li>
    </ul>



    <input type="text" label="name" v-model="nomeRest" placeholder="Digite aqui o nome"></input>
    <input type="text" label="quality" v-model="qualiRest" placeholder="Digite aqui a qualidade"></input>
    <input type="text" label="price" v-model="priceRest" placeholder="Digite aqui o preco"></input>
    <input type="text" label="ambience" v-model="ambRest" placeholder="Digite aqui a ambieance"></input>

    <button @click="criar">Criar</button>
    <button @click="getAllInfo">GetAllInfo</button>

  </div>
</template>

<style scoped>
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
