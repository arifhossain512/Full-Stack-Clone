import axios from "axios";

const newRequest = axios.create({
  baseURL:"https://full-stack-clone.vercel.app/api/",
  withCredentials: true,
});

export default newRequest;
