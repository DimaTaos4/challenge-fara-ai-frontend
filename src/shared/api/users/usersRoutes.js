import { backendInstance } from "../backendInstance";

export const loginUserApi = async (payload) => {
    const { data } = await backendInstance.post("/api/users/login", payload);
    return data;
}