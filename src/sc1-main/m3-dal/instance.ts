import axios from 'axios';
import {apiConfig} from "../../sc3-utils/config";

export const instance = axios.create({
  baseURL: apiConfig.BASE_URL,
  headers: {
    "apikey": apiConfig.API_KEY as string
  },
})