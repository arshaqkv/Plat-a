import { IRestaurant } from "../entities/restaurant.entity";

export interface IRestaurantRepository {
  create(data: any): Promise<IRestaurant>;
  update(id: number, data: IRestaurant): Promise<void>;
  delete(id: number): Promise<void>;
  findById(id: number): Promise<IRestaurant | null>;
  findAll(): Promise<IRestaurant[]>;
  findByName(name: string): Promise<IRestaurant | null>;
  findDuplicate(name: string, id: number): Promise<boolean>;
}
