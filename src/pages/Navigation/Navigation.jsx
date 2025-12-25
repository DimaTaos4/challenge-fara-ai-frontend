import { Routes, Route } from "react-router-dom";

import LoginPage from "../LoginPage/LoginPage"
import MainPage from "../MainPage/MainPage"
import AnalysisPage from "../AnalysisPage/AnalysisPage";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";

const Navigation = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route element={<ProtectedRoute />}>
                <Route path="/analysis" element={<AnalysisPage />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}
export default Navigation;