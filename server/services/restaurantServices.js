import express from "express"
import pool from "../db/index.js"

const router = express.Router();

router.use(express.json())


async function getRestaurantById(id) {
    const queryResult = await pool.query(
        "SELECT * FROM restaurant WHERE id = $1", [id]);
    if (!queryResult.rows.length) {
        throw new Error("Restaurante nao encontrado")
    }

    return queryResult.rows[0];
}

async function getAllRestaurants(){
    const queryResult = await pool.query("SELECT * FROM restaurant")
    if (!queryResult.rows.length) {
        throw new Error("Restaurantes nao encontrado")
    }

    return queryResult.rows

}

async function updateRestaurantById(id, updates){
    const restaurant = await getRestaurantById(id);

    if (!restaurant) throw new Error("Restaurante nao encontrado");

    const fields = Object.keys(updates)
        .map((field, index) => `${field} = $${index + 1}`)
        .join(", ");

    const values = Object.values(updates);

    const query = `UPDATE restaurant SET ${fields} WHERE id = $${values.length + 1
        } RETURNING *`;
    const result = await pool.query(query, [...values, id]);
    return result.rows[0];
}


async function deleteRestaurantById(id){

    const reastaurant = await getRestaurantById(id)

    if(!reastaurant) throw new Error("Restaurante nao encontrado")

    const result = await pool.query("DELETE FROM restaurant WHERE id = $1", [id]);

    return result.rowCount
}

async function createNewRestaurant(body) {
    const result = await pool.query(
        "INSERT INTO restaurant(id, name, quality, ambience, price) VALUES ($1, $2, $3, $4, $5)",
        [
            body.id,
            body.name,
            body.quality,
            body.ambience,
            body.price,
        ]
    );
    return result.rows[0];
}

export {
    getRestaurantById,
    deleteRestaurantById,
    getAllRestaurants,
    createNewRestaurant
}
