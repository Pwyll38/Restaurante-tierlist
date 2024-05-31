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

    async function createRestaurant(restaurante){
        await restaurantController.createRestaurant(restaurante)
    }
    return {
        ...toRefs(state),
        getAll,
        createRestaurant,
    }
}