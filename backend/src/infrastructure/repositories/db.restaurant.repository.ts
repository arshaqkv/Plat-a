import { Op } from "sequelize";
import { IRestaurant } from "../../domain/entities/restaurant.entity";
import { IRestaurantRepository } from "../../domain/interfaces/restaurant.repository";
import Restaurant from "../models/restaurant.model";

export class DBRestaurantRepository implements IRestaurantRepository {
  async create(data: any): Promise<IRestaurant> {
    return await Restaurant.create(data);
  }

  async update(id: number, data: IRestaurant): Promise<void> {
    await Restaurant.update(data, { where: { id } });
  }

  async delete(id: number): Promise<void> {
    await Restaurant.destroy({ where: { id } });
  }

  async findById(id: number): Promise<IRestaurant | null> {
    return await Restaurant.findOne({ where: { id } });
  }

  async findByName(name: string): Promise<IRestaurant | null> {
    return await Restaurant.findOne({ where: { name } });
  }

  async findAll(): Promise<IRestaurant[]> {
    return await Restaurant.findAll();
  }

  async findDuplicate(name: string, id: number): Promise<boolean> {
    const existing = await Restaurant.findOne({
      where: { name, id: { [Op.ne]: id } },
    });
    return !!existing;
  }
}
