import { IRestaurant } from "../../domain/entities/restaurant.entity";
import { IRestaurantRepository } from "../../domain/interfaces/restaurant.repository";
import { CustomError } from "../../interface/middlewares/error.middleware";
import { HttpStatus } from "../../utils/httpStatus";

export class GetSingleRestaurant {
  constructor(private restaurantRepository: IRestaurantRepository) {}

  async execute(id: number): Promise<IRestaurant | null> {
    const restaurant = await this.restaurantRepository.findById(id);

    if (!restaurant) {
      throw new CustomError("Data not found", HttpStatus.NOT_FOUND);
    }

    return restaurant;
  }
}
