import { backendInstance } from "./backendInstance";


export const getAnalysisApi = async () => {
    const {data} = await backendInstance.get("/api/analysis")
    return data
}