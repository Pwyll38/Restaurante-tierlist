import axios from "axios"

function createRestaurant(restaurant) {
    return axios.post('http://localhost:3000/restaurant/', restaurant)
}

async function getRestaurant(name) {
    return axios.get(`http://localhost:3000/restaurant/${name}`)
}

async function getAll() {
    const response = await axios.get('http://localhost:3000/restaurant/');
    return response.data;
}

async function deleteRestaurantByName(name){
    await axios.delete(`http://localhost:3000/restaurant/${name}`)
}

export default {
    createRestaurant,
    getRestaurant,
    getAll,
    deleteRestaurantByName
}