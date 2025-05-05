import dotenv from "dotenv";
import { Dialect } from "sequelize";
dotenv.config();

const {
  PORT,
  JWT_SECRET,
  NODE_ENV,
  CLIENT_URL,
  DB_NAME,
  DB_HOST,
  DB_USER,
  DB_PASSWORD,
  DB_DIALECT,
} = process.env;

interface CorsConfig {
  CLIENT_URL: string;
  ALLOWED_HEADERS: string[];
  ALLOWED_METHODS: string[];
  CREDENTIALS: boolean;
}

interface DBConfig {
  DB_NAME: string;
  HOST: string;
  USER: string;
  PASSWORD: string;
  DIALECT: Dialect;
}

interface Config {
  PORT: number;
  JWT_SECRET: string;
  ENVIRONMENT: string;
  CORS: CorsConfig;
  DB: DBConfig;
}

export const config: Config = {
  PORT: parseInt(PORT || "8001", 10),
  JWT_SECRET: JWT_SECRET as string,
  ENVIRONMENT: NODE_ENV as string,
  CORS: {
    CLIENT_URL: (CLIENT_URL as string) || "http://localhost:5173",
    ALLOWED_HEADERS: ["Content-type", "Authorization"],
    ALLOWED_METHODS: ["GET", "POST", "DELETE", "PUT", "PATCH"],
    CREDENTIALS: true,
  },
  DB: {
    DB_NAME: DB_NAME as string,
    USER: DB_USER as string,
    PASSWORD: DB_PASSWORD as string,
    HOST: DB_HOST as string,
    DIALECT: DB_DIALECT as Dialect,
  },
};
