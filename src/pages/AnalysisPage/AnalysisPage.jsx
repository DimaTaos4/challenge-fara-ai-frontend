import styles from './AnalysisPage.module.css';
import { useAuthToken } from '../../shared/hooks/useAuthToken';
import { Navigate } from "react-router-dom";

const AnalysisPage = () => {
    const { username, isAdmin, retailerKey } = useAuthToken();

    // 🔒 Admin без выбранного retailer
    if (isAdmin && !retailerKey) {
        return <Navigate to="/admin/retailers" replace />;
    }

    return (
        <div>
            <h2 className={styles.title}>Hello {username}</h2>

            {isAdmin ? (
                <h3>Analysis for selected retailer: {retailerKey}</h3>
            ) : (
                <h3>That is your store</h3>
            )}

            <div>
                {/* charts / tables / data */}
            </div>
        </div>
    );
};

export default AnalysisPage;