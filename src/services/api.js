import axios from "axios";

export const api = axios.create({
    baseURL: 'https://back2-unbs.onrender.com'
});