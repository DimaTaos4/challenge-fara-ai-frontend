import styles from './AnalysisPage.module.css';
import { useAuthToken } from '../../shared/hooks/useAuthToken';
import { Navigate } from "react-router-dom";
import { getAnalysisApi } from '../../shared/api/analysisRoutes';
import { useState, useEffect } from 'react';


const AnalysisPage = () => {
    const { username, isAdmin, retailerKey } = useAuthToken();
    const [analysis, setAnalysis] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const data = await getAnalysisApi();
                setAnalysis(data);
            } catch (error) {
                console.error(error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);
    useEffect(() => {
        console.log(analysis);
    }, [analysis])

    if (isAdmin && !retailerKey) {
        return <Navigate to="/admin/retailers" replace />;
    }
    const element = analysis.map(data => (
        <li key={data.id} className={styles.analysisItem}>
            <span className={styles.month}>
                {data.month}
            </span>
            <span className={styles.revenue}>
                {data.revenue}
                <span className={styles.currency}>€</span>
            </span>
        </li>
    ))

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
                {element}
            </ul>
        </div>

    );
};

export default AnalysisPage;