import { backendInstance } from "../backendInstance";

export const getAllRetailers = async () => {
    const { data } = await backendInstance.get("/api/retailers")
    return data
}