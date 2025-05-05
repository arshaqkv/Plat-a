import { AddRestuarant } from "../../application/use cases/AddRestaurant";
import { DeleteRestaurant } from "../../application/use cases/DeleteRestaurant";
import { EditRestaurant } from "../../application/use cases/EditRestaurant";
import { GetAllRestaurants } from "../../application/use cases/GetAllRestaurants";
import { GetSingleRestaurant } from "../../application/use cases/GetSingleRestaurant";
import { DBRestaurantRepository } from "../repositories/db.restaurant.repository";

class RestaurantDIContainer {
  static getRestaurantRepository() {
    return new DBRestaurantRepository();
  }

  static getCreateRestaurantUseCase() {
    return new AddRestuarant(this.getRestaurantRepository());
  }

  static getEditRestaurantUseCase() {
    return new EditRestaurant(this.getRestaurantRepository());
  }

  static getDeleteRestaurantUseCase() {
    return new DeleteRestaurant(this.getRestaurantRepository());
  }

  static getSingleRestaurantUseCase() {
    return new GetSingleRestaurant(this.getRestaurantRepository());
  }

  static getAllRestaurantsUseCase() {
    return new GetAllRestaurants(this.getRestaurantRepository());
  }
}

export { RestaurantDIContainer };
