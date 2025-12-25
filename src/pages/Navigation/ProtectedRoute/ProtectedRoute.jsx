import { Outlet, Navigate } from "react-router-dom"

import { useAuthToken } from "../../../shared/hooks/useAuthToken"

const ProtectedRoute = () => {
    const { token } = useAuthToken()
    return token ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoute