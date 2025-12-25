import { jwtDecode } from "jwt-decode";

export const useAuthToken = () => {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");

    let decoded = null;

    if (token) {
        try {
            decoded = jwtDecode(token);
        } catch {
            decoded = null;
        }
    }

    return {
        token,
        username,
        isAdmin: decoded?.isAdmin,
        retailerKey: decoded?.retailerKey,
    };
};