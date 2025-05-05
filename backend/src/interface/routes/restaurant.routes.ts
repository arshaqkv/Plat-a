import { Router } from "express";
import { restaurantController } from "../controllers/restaurant.controller";

const router = Router();

router
  .route("/")
  .post(restaurantController.createRestaurant)
  .get(restaurantController.getAllRestaurants);

router
  .route("/:id")
  .get(restaurantController.getSingleRestaurant)
  .put(restaurantController.editRestaurant)
  .delete(restaurantController.deleteRestaurant);

export { router as restaurantRoutes };
