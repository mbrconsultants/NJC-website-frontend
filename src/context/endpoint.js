import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API_URL,
});
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // if (error.response && error.response.status === 401) {
    //   window.location.reload();
    //   return error;
    // }
    throw error;
  }
);

export default instance;
