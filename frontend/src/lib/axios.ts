import axios from "axios";

export const api = axios.create({
  baseURL: 'https://api-trip-planner-92er.onrender.com'
})