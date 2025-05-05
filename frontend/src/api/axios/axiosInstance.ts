import axios from "axios";
import { config } from "../../config/config";

const BASE_URL = config.app.BACKEND;

const axiosIntance = axios.create({
  baseURL: BASE_URL,
});

export default axiosIntance;
