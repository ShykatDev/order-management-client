import axios from "axios";
import Cookies from "js-cookie";

const API = axios.create({
    baseURL:process.env.NEXT_PUBLIC_BASE_URL,
    withCredentials: true
})

let accessToken = Cookies.get("accessToken");

// API.interceptors.request.use(
//     (config) => {
//       if (accessToken) {
//         config.headers["Authorization"] = `Bearer ${accessToken}`;
//       }
  
//       return config;
//     },
//     (error) => Promise.reject(error)
//   );

// export const setAccessToken = (token) => {
//     accessToken = token;
//     if (token) {
//       Cookies.set("accessToken", token, {
//         expires: 1, // Token will expire in 1 days
//         secure: process.env.NODE_ENV === "production", // Use HTTPS in production
//         sameSite: "strict", // Protect against CSRF
//         path: "/",
//       });
//     } else {
//       Cookies.remove("accessToken");
//     }
//   };


export default API