import { NextFunction, Request, Response } from "express";
import { RestaurantDIContainer } from "../../infrastructure/DI/RestaurantDIContainer";
import { HttpStatus } from "../../utils/httpStatus";

class RestaurantController {
  async createRestaurant(req: Request, res: Response, next: NextFunction) {
    try {
      const createRestaurant = RestaurantDIContainer.getCreateRestaurantUseCase();
      await createRestaurant.execute(req.body);
      res.status(HttpStatus.CREATED).json({ message: "New restaurant added" });
    } catch (error) {
      next(error);
    }
  }

  async editRestaurant(req: Request, res: Response, next: NextFunction) {
    try {
      const id = +req.params.id;
      const editRestaurant = RestaurantDIContainer.getEditRestaurantUseCase();
      await editRestaurant.execute(id, req.body);
      res.status(HttpStatus.OK).json({ message: "Restaurant data updated" });
    } catch (error) {
      next(error);
    }
  }

  async deleteRestaurant(req: Request, res: Response, next: NextFunction) {
    try {
      const id = +req.params.id;
      const deleteRestaurant = RestaurantDIContainer.getDeleteRestaurantUseCase();
      await deleteRestaurant.execute(id);
      res.status(HttpStatus.OK).json({ message: "Restaurant deleted" });
    } catch (error) {
      next(error);
    }
  }

  async getSingleRestaurant(req: Request, res: Response, next: NextFunction) {
    try {
      const id = +req.params.id;
      const getSingleRestaurant = RestaurantDIContainer.getSingleRestaurantUseCase();
      const restaurant = await getSingleRestaurant.execute(id);
      res.status(HttpStatus.OK).json({ restaurant });
    } catch (error) {
      next(error);
    }
  }

  async getAllRestaurants(req: Request, res: Response, next: NextFunction) {
    try {
      const getAllRestaurants = RestaurantDIContainer.getAllRestaurantsUseCase();
      const restaurants = await getAllRestaurants.execute();
      res.status(HttpStatus.OK).json({ restaurants });
    } catch (error) {
      next(error);
    }
  }
}

const restaurantController = new RestaurantController();
export { restaurantController };
