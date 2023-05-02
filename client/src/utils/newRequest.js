import axios from "axios";

const newRequest = axios.create({
  baseURL:"https://fiverr-clone-tzhc.onrender.com/api",
  withCredentials: true,
});

export default newRequest;
// http://localhost:8000/api