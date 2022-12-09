import axios from "axios";
import { baseURL } from "../utils/route";

const AUTH_TOKEN = `Bearer ${localStorage.getItem("access_token") || ""}`;

const http = axios.create({
  baseURL: baseURL,
  withCredentials: false, // This is the default
  headers: { Accept: "application/json", "Content-Type": "application/json" },
});

http.defaults.headers.common.Authorization = AUTH_TOKEN;

export default http;
