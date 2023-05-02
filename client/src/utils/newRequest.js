import axios from "axios";

const newRequest = axios.create({
  baseURL:`${window.location.origin}/api/`,
  withCredentials: true,
});

export default newRequest;
// https://full-stack-clone.vercel.app/api/