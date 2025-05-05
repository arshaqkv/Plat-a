import express, { Request, Response, Application } from "express";
import morgan from "morgan";
import cors from "cors";
import cookieParser from "cookie-parser";

import { config } from "../config/config";
import sequelize from "../infrastructure/Database/dbConfig";
import { errorHandler } from "../interface/middlewares/error.middleware";
import { restaurantRoutes } from "../interface/routes/restaurant.routes";

const app: Application = express();
const PORT = config.PORT;

//middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//cors setup
app.use(
  cors({
    origin: config.CORS.CLIENT_URL,
    allowedHeaders: config.CORS.ALLOWED_HEADERS,
    methods: config.CORS.ALLOWED_METHODS,
    credentials: config.CORS.CREDENTIALS,
  })
);

//testing api
app.get("/", (req: Request, res: Response) => {
  res.send("Hello world");
});

//routes
app.use("/api/restaurant", restaurantRoutes);

app.use(errorHandler);

sequelize.sync().then(() => {
  console.log("✅ Database synced");
  //listening to port
  app.listen(PORT, () => {
    console.log(`Platéa server running on http://localhost:${PORT}`);
  });
});
