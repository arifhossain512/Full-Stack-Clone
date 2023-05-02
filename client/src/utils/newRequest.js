import axios from "axios";

const newRequest = axios.create({
  baseURL:"https://full-stack-clone-arifhossain512.vercel.app/api",
  withCredentials: true,
});

export default newRequest;
// http://localhost:8000/api