import { IRestaurant } from "../../domain/entities/restaurant.entity";
import { IRestaurantRepository } from "../../domain/interfaces/restaurant.repository";
import { CustomError } from "../../interface/middlewares/error.middleware";
import { HttpStatus } from "../../utils/httpStatus";

export class EditRestaurant {
  constructor(private restaurantRepository: IRestaurantRepository) {}

  async execute(id: number, data: IRestaurant): Promise<void> {
    const restaurant = await this.restaurantRepository.findById(id);

    if (!restaurant) {
      throw new CustomError("Data not found", HttpStatus.NOT_FOUND);
    }

    const isDuplicate = await this.restaurantRepository.findDuplicate(
      data.name,
      id
    );

    if (isDuplicate) {
      throw new CustomError(
        "Another restaurant with this name already exists",
        HttpStatus.BAD_REQUEST
      );
    }

    await this.restaurantRepository.update(id, data);
  }
}
