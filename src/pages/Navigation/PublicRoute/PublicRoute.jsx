import { Navigate, Outlet } from "react-router-dom";
import { useAuthToken } from "../../../shared/hooks/useAuthToken";

const PublicRoute = () => {
    const { token } = useAuthToken();

    return token ? <Navigate to="/analysis" replace /> : <Outlet />;
};

export default PublicRoute;