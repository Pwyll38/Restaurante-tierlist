import * as restaurantServices from "../services/restaurantServices.js"

async function getRestaurantById(req,res){
    try{
        const { id } = req.params
        const restaurant = await restaurantServices.getRestaurantById(id)

        if(!restaurant){console.log("Restaurante nao encontrado")}

        res.status(200).json(restaurant);
    }catch(error){
        console.log(error);
        res.status(error.status).send("Erro ao executar a query " + error.message);
    }
}

async function getAllRestaurants(req,res){
    try{
        const restaurant = await restaurantServices.getAllRestaurants()

        if(!restaurant){console.log("Restaurante nao encontrado")}

        res.status(200).json(restaurant);
    }catch(error){
        console.log(error);
        res.status(error.status).send("Erro ao executar a query " + error.message);
    }
}

async function createNewRestaurant(req,res){
    try {
        const body = req.body;
        const restaurant = await restaurantServices.createNewRestaurant(body);
        res.json(restaurant);
    } catch (error) {
        console.error(error);
        res.status(error.status).send("Erro ao executar a query " + error.message);
    }

}

async function updateRestaurantById(req, res) {
    try {
        const body = req.body;
        const { id } = req.params
        const restaurant = await restaurantServices.updateRestaurantById(id, body);

        if (!restaurant) throw new Error('Restaurante nao encontrado');

        res.json(restaurant);
    } catch (error) {
        res.status(error.status).send("Erro ao executar a query " + error.message);
    }
}

async function deleteRestaurantById(req, res) {
    try {
        const id = req.params.id;
        const restaurant = await restaurantServices.deleteRestaurantById(id);

        if (!restaurant) throw new Error('Restaurante nao encontrado');

        res.json(restaurant);
    } catch (error) {
        console.error(error);
        res.status(error.status).send("Erro ao executar a query " + error.message);
    }
}

export {
    createNewRestaurant,
    getAllRestaurants,
    deleteRestaurantById,
    getRestaurantById,
    updateRestaurantById
}