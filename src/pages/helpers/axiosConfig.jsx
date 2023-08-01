import axios from "axios";

// Creating axios client, preconfigured with base url and other fields
export const axiosInstance = axios.create({
   baseURL: import.meta.env.VITE_BACKEND_API,
   timeout: 150000,
   timeoutErrorMessage:
     "Your request timed out, please check your internet connection",
   headers: {
     Accept: "application/json",
     "content-type": "application/json",
   },
 });