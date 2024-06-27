import axios from "axios"

function createRestaurant(restaurant) {
    return axios.post('http://localhost:3000/restaurant/', restaurant)
}

async function getRestaurant(id) {
    return axios.get(`http://localhost:3000/restaurant/${id}`)
}

async function getAll() {
    const response = await axios.get('http://localhost:3000/restaurant/');
    return response.data;
}

async function deleteRestaurantById(id){
    await axios.delete(`http://localhost:3000/restaurant/${id}`)
}

async function updateRestaurant(restaurant, id){
    await axios.put(`http://localhost:3000/restaurant/${id}`, restaurant)
}

export default {
    createRestaurant,
    getRestaurant,
    getAll,
    deleteRestaurantById,
    updateRestaurant
}