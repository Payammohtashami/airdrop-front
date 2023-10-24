import axios from "axios";
import { BASE_URL } from "@/config/configs";

export default axios.create({
  baseURL: BASE_URL,
});