import axios from "axios";

const BASE_URL = "http://192.168.2.80:8000/";
const instance = axios.create({ baseURL: BASE_URL });

export { BASE_URL, instance };
