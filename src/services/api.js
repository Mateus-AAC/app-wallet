import axios from "axios";
import {API_URL, TOKEN} from '@env';

const url = process.env.API_URL;
const token = process.env.TOKEN;

export const api = axios.create({
  baseURL: url,
  headers: {'authorization': token}
});