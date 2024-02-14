import axios from "axios";

const BASE_URL = "http://172.20.10.2:8000/";
const instance = axios.create({ baseURL: BASE_URL });

export { BASE_URL, instance };
