import axios from "axios";

export const backendInstance = axios.create({
    baseURL: import.meta.env.VITE_API_BACKEND_URL,
});

backendInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);