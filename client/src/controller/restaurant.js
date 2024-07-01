import axios from "axios"

//DEV URL: `http://localhost:3000/restaurant/`
//PROD URL: https://restaurante-tierlist.onrender.com
const url = `http://localhost:3000/restaurant/`

function createRestaurant(restaurant) {
    return axios.post(`${url}`, restaurant)
}

async function getRestaurant(id) {
    console.log(process.env);
    return axios.get(`${url}${id}`)
}

async function getAll() {
    const response = await axios.get(`${url}`);
    return response.data;
}

async function deleteRestaurantById(id){
    await axios.delete(`${url}${id}`)
}

async function updateRestaurant(restaurant, id){
    console.log(`${url}${id}`);
    await axios.put(`${url}${id}`, restaurant)
}

export default {
    createRestaurant,
    getRestaurant,
    getAll,
    deleteRestaurantById,
    updateRestaurant
}