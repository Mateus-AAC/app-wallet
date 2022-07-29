import axios from "axios";

const url = process.env.API_URL;
const token = process.env.TOKEN;

export const api = axios.create({
  baseURL: url,
  headers: {'authorization': token}
});