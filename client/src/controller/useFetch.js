import { reactive, toRefs, ref } from 'vue'
import restaurantController from "./restaurant";

export function useFetch() {

    const state = reactive({
        rest: ref([])
    })

    async function getAll() {
        try {
            state.rest = await restaurantController.getAll();
        } catch (error) {
            console.log(error);
        }
    }

    async function createRestaurant(restaurant){
        await restaurantController.createRestaurant(restaurant)
    }

    async function deleteRestaurantByName(name){
        await restaurantController.deleteRestaurantByName(name)
    }

    async function updateRestaurant(restaurant){
        await restaurantController.updateRestaurant(restaurant)
    }

    return {
        ...toRefs(state),
        getAll,
        createRestaurant,
        deleteRestaurantByName,
        updateRestaurant
    }
}