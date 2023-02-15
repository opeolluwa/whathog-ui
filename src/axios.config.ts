import axios from "axios";
import { Preferences } from "@capacitor/preferences";
const BASE_URL = import.meta.env.VITE_APP_URL;
// const BASE_URL = import.meta.env.VITE_ENVIRONMENT
const NODE_ENV = import.meta.env.MODE;

console.log({ BASE_URL });
axios.defaults.timeout = 25000;
axios.defaults.baseURL = "https://whathog.onrender.com/v1";
// axios.defaults.baseURL = "http://localhost:3415/v1";
axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
  "token"
)}`;

console.log(
  JSON.stringify({
    base_url: axios.defaults.baseURL,
    token: `Bearer ${localStorage.getItem("token")}`,
  })
);
