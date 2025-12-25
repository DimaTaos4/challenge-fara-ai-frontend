import { jwtDecode } from "jwt-decode";

export const useAuthToken = () => {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");

    if (!token) return { token: null };

    const decoded = jwtDecode(token);

    return {
        token,
        username,
        isAdmin: decoded.isAdmin,
        retailerKey: decoded.retailerKey,
    };
};