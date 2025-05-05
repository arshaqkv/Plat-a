import { DataTypes, Model } from "sequelize";
import sequelize from "../Database/dbConfig";

class Restaurant extends Model {
  public id!: number;
  public name!: string;
  public address!: string;
  public contact!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Restaurant.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contact: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Restaurant",
    tableName: "restaurants",
    timestamps: true,
  }
);

export default Restaurant;
