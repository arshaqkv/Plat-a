import { IRestaurant } from "../../domain/entities/restaurant.entity";
import { IRestaurantRepository } from "../../domain/interfaces/restaurant.repository";
import { CustomError } from "../../interface/middlewares/error.middleware";
import { HttpStatus } from "../../utils/httpStatus";

export class AddRestuarant {
  constructor(private restaurantRepository: IRestaurantRepository) {}

  async execute(data: IRestaurant): Promise<void> {
    const { name, address, contact } = data;

    if (!name || !address || !contact) {
      throw new CustomError("All fields required", HttpStatus.BAD_REQUEST);
    }

    const existingRestaurant = await this.restaurantRepository.findByName(name);

    if (existingRestaurant) {
      throw new CustomError(
        "Restaurant already exists",
        HttpStatus.BAD_REQUEST
      );
    }

    await this.restaurantRepository.create(data);
  }
}
