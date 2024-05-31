import * as restaurantServices from "../services/restaurantServices.js"

async function getRestaurantByName(req,res){
    try{
        const { name } = req.params
        const restaurant = await restaurantServices.getRestaurantByName(name)

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

async function updateRestaurantByName(req, res) {
    try {
        const body = req.body;
        const { name } = req.params
        const restaurant = await restaurantServices.updateRestaurantByName(name, body);

        if (!restaurant) throw new Error('Restaurante nao encontrado');

        res.json(restaurant);
    } catch (error) {
        res.status(error.status).send("Erro ao executar a query " + error.message);
    }
}

async function deleteRestaurantByName(req, res) {
    try {
        const name = req.params.name;
        const restaurant = await restaurantServices.deleteRestaurantByName(name);

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
    deleteRestaurantByName,
    getRestaurantByName,
    updateRestaurantByName
}