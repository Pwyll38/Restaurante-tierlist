<script>
import { ref } from "vue";
import RestaurantCard from './RestaurantCard.vue'
import { useFetch } from '../controller/useFetch'
import controller from "../controller/restaurant"
import sillySound from '../assets/sillySound.mp3'


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
    const isLogoShrunk = ref("")

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
      lastId,
      isLogoShrunk
    }
  },

  async beforeMount() {
    this.allInfo = await this.getAllInfo()
    console.log("ALL INFO: " + JSON.stringify(this.allInfo));
    if (this.allInfo == "") {
      this.lastId = 0
    } else {
      this.lastId = this.getLastId()
    }

  },

  methods: {

    playSilly() {

      this.isLogoShrunk = !this.isLogoShrunk;
      setTimeout(() => {
        this.isLogoShrunk = !this.isLogoShrunk;
      }, 200);

      const audio = new Audio(sillySound)
      audio.volume = 0.2
      audio.play()

    },

    getLastId() {
      if (this.lastId == 0) {
        return 1
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
        path: '/create', query: {
          id: this.getLastId() + 1
        }
      })
    }
  }
}


</script>

<template>

  <img src="../assets/logo.png" alt="Logo" class="logo" id="logo" :class="{ shrink: isLogoShrunk }" @click="playSilly">

  <div class="card-row">

    <ul>
      <li v-for="restaurant in allInfo" :key="restaurant.id">
        <RestaurantCard :id="restaurant.id" :name="restaurant.name" :quality="restaurant.quality"
          :price="restaurant.price" :ambience="restaurant.ambience" />
      </li>
    </ul>


  </div>
  <div>
    <button @click="navegateToCreate">Criar</button>
  </div>

</template>

<style scoped>
.card-row {
  margin-left: 9%;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.logo {
  width: 70%;
  transition: transform 0.5s ease;
}

.shrink {
  transform: scale(0.8);
}

ul {
  list-style-type: none;
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
