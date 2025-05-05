import { IRestaurant } from "../../domain/entities/restaurant.entity";
import { IRestaurantRepository } from "../../domain/interfaces/restaurant.repository";

export class GetAllRestaurants {
  constructor(private restaurantRepository: IRestaurantRepository) {}

  async execute(): Promise<IRestaurant[]> {
    const restaurants = await this.restaurantRepository.findAll();

    return restaurants;
  }
}
