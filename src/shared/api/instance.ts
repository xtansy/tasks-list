import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/";

export const api = axios.create({
    baseURL: API_URL,
});