import { Routes, Route } from "react-router-dom";

import LoginPage from "../LoginPage/LoginPage"
import MainPage from "../MainPage/MainPage"
import AnalysisPage from "../AnalysisPage/AnalysisPage";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import PublicRoute from "./PublicRoute/PublicRoute";
import AdminRoute from "../AdminRoute/AdminRoute";
import RetailerSelectPage from "../RetailerSelectPage/RetailerSelectPage";
const Navigation = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route element={<PublicRoute />}>
                <Route path="/login" element={<LoginPage />} />
            </Route>
            <Route element={<ProtectedRoute />}>
                <Route path="/analysis" element={<AnalysisPage />} />
            </Route>

            <Route element={<AdminRoute />}>
                <Route path="/admin/retailers" element={<RetailerSelectPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}
export default Navigation;