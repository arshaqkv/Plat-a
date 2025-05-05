import { IRestaurantRepository } from "../../domain/interfaces/restaurant.repository";
import { CustomError } from "../../interface/middlewares/error.middleware";
import { HttpStatus } from "../../utils/httpStatus";

export class DeleteRestaurant {
  constructor(private restaurantRepository: IRestaurantRepository) {}

  async execute(id: number): Promise<void> {
    const restaurant = await this.restaurantRepository.findById(id);

    if (!restaurant) {
      throw new CustomError("Data not found", HttpStatus.NOT_FOUND);
    }

    await this.restaurantRepository.delete(id);
  }
}
