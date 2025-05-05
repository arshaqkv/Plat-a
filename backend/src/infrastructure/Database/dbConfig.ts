import { Sequelize } from "sequelize";
import { config } from "../../config/config";

const sequelize = new Sequelize(
  config.DB.DB_NAME,
  config.DB.USER,
  config.DB.PASSWORD,
  {  
    host: config.DB.HOST,
    dialect: config.DB.DIALECT,
  }
);
sequelize
  .authenticate()
  .then(() => {
    console.log("✨ Database connected✨");
  })
  .catch((err) => {
    console.log("❌ Error in Database connection", err);
  });

export default sequelize;
