import { Navigate, Outlet } from "react-router-dom";
import { useAuthToken } from "../../../shared/hooks/useAuthToken";
const AdminRoute = () => {
    const { token, isAdmin } = useAuthToken();

    if (!token) return <Navigate to="/login" replace />;
    if (!isAdmin) return <Navigate to="/analysis" replace />;

    return <Outlet />;
};

export default AdminRoute;