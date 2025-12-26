import styles from './AnalysisPage.module.css';
import { useAuthToken } from '../../shared/hooks/useAuthToken';
import { Navigate, useSearchParams } from "react-router-dom";
import { getAnalysisApi } from '../../shared/api/analysisRoutes';
import { useState, useEffect } from 'react';

import LogoutButton from '../../shared/components/LogoutButton/LogoutButton';

const AnalysisPage = () => {
    const { username, isAdmin } = useAuthToken();

    const [analysis, setAnalysis] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [searchParams] = useSearchParams();
    const retailerKey = searchParams.get("retailerKey");

    useEffect(() => {
        if (isAdmin && !retailerKey) return;

        const fetchData = async () => {
            try {
                setLoading(true);
                const data = await getAnalysisApi(retailerKey);
                setAnalysis(data);
            } catch (error) {
                console.error(error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [isAdmin, retailerKey]);

    if (isAdmin && !retailerKey) {
        return <Navigate to="/admin/retailers" replace />;
    }

    return (
        <div className={styles.analysisPage}>
            <h2 className={styles.title}>Hello {username}</h2>

            {isAdmin ? (
                <h3 className={styles.subtitle}>
                    Analysis for retailer: {retailerKey}
                </h3>
            ) : (
                <h3 className={styles.subtitle}>
                    Your store performance
                </h3>
            )}

            {loading && <p className={styles.loading}>Loading...</p>}
            {error && <p className={styles.error}>{error}</p>}

            <ul className={styles.analysisList}>
                {analysis.map(item => (
                    <li key={item.id} className={styles.analysisItem}>
                        <span className={styles.month}>{item.month}</span>
                        <span className={styles.revenue}>
                            {item.revenue}
                            <span className={styles.currency}>€</span>
                        </span>
                    </li>
                ))}
            </ul>

            <LogoutButton />
        </div>
    );
};

export default AnalysisPage;