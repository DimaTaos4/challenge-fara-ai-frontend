import { backendInstance } from "./backendInstance";


export const getAnalysisApi = async (retailerKey) => {
    const params = retailerKey ? { retailerKey } : {};
    const { data } = await backendInstance.get("/api/analysis", { params });
    return data;
};