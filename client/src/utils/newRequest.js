import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://fiverr-api-88p1.onrender.com/api",
  withCredentials: true,
});

export default newRequest;
// use below address for development environment
// http://localhost:8000/api