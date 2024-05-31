import express from "express"

import * as restaurantController from "../controller/restaurantController.js"

const router = express.Router();

router.get("/:name", restaurantController.getRestaurantByName)
router.get("/", restaurantController.getAllRestaurants)
router.post("/", restaurantController.createNewRestaurant)
router.put("/:name", restaurantController.updateRestaurantByName)
router.delete("/:name",restaurantController.deleteRestaurantByName)

export default router