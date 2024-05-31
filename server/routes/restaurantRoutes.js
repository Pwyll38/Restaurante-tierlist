import express from "express"

import * as restaurantController from "../controller/restaurantController.js"

const router = express.Router();

router.get("/:id", restaurantController.getRestaurantById)
router.get("/", restaurantController.getAllRestaurants)
router.post("/", restaurantController.createNewRestaurant)
router.put("/:id", restaurantController.updateRestaurantById)
router.delete("/:id",restaurantController.deleteRestaurantById)

export default router