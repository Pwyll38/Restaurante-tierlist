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

    this.lastId = this.getLastId()
  },

  methods: {

    getLastId() {
      const keys = Object.keys(this.allInfo);
      const lastKey = keys[keys.length - 1];
      const lastValue = this.allInfo[lastKey];

      return lastValue.id
    },

    async getAllInfo() {
      try {
        const resposta = await controller.getAll()

        if (!resposta) {
          console.log("GetAllInfoError: sem resposta");
        }

        return resposta

      } catch (error) {
        console.log(error);
      }
    },

    async criar() {
      try {
        this.lastId++
        await controller.createRestaurant({
          id: this.lastId,
          name: this.nomeRest,
          quality: this.qualiRest,
          price: this.priceRest,
          ambience: this.ambRest
        });

      } catch (error) {
        console.log("erro" + error);
      }
    },

    async deletarPorNome() {
      try {
        await controller.deleteRestaurantByName(this.nameDelete)
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
        <RestaurantCard :name="restaurant.name" :quality="restaurant.quality" :price="restaurant.price"
          :ambience="restaurant.ambience" />
      </li>
    </ul>


    <div>
      <input type="text" label="name" v-model="nomeRest" placeholder="Digite aqui o nome"></input>
      <input type="text" label="quality" v-model="qualiRest" placeholder="Digite aqui a qualidade"></input>
      <input type="text" label="price" v-model="priceRest" placeholder="Digite aqui o preco"></input>
      <input type="text" label="ambience" v-model="ambRest" placeholder="Digite aqui a ambieance"></input>

      <button @click="criar">Criar</button>
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
